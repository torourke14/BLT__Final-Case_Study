/*
 *  index.js
 *  @Author Clayton Cunningham
 *
 *  Ticket record program for StubHub clone.
*/

require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');
const { body, validationResult } = require('express-validator');
const { Ticket } = require('./models/ticket.js');
const mongoose = require('mongoose');
const app = express();
app.use(bodyParser.json());
app.use(cors());

const uri = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PW}@e-tickets-cluster.ovpau.mongodb.net/${process.env.MONGO_TICKETS_DB}?retryWrites=true&w=majority`
mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true})

// GET

app.get('/api/tickets', (req, res) => {
    Ticket.find({}, (err, tickets) => {
        if (err) throw err
        res.send(tickets || [])
    })
});

app.get('/api/tickets/:id', (req, res) => {
    Ticket.findById(req.params.id, (err, ticket) => {
        if (err) throw err
        res.send(ticket || [])
    })
});


// POST

app.post('/api/tickets', [
    body('title').not().isEmpty().withMessage('Title is required'),
    body('price')
        .isFloat({ gt: 0 })
        .withMessage('Price must be greater than 0'),
    ],
    async (req, res) => {

    const errors = validationResult(req);
    // Send errors to user
    const error = new Error('Invalid title or price!');
    error.descriptors = errors.array();
    if(!errors.isEmpty()){
        error.descriptors = errors.array();
        res.status(201).send(error.descriptors[0].msg);
        return;
    }

    // Retrieve input and create new ticket
    const { title, price } = req.body;
    const ticket = new Ticket({
        title,
        price
    });
    await ticket.save();

    await axios.post('http://event-bus-clusterip-svc:4005/events', {
        type: 'TicketCreated',
        data: {
        ticketId: ticket.id,
        title,
        price
        }
    });

    res.status(201).send(ticket);
});


// PUT

app.put('/api/tickets/:id', [
    body('title').not().isEmpty().withMessage('Title is required'),
    body('price')
        .isFloat({ gt: 0 })
        .withMessage('Price must be greater than 0'),
    ],
    async (req, res) => { 

    const errors = validationResult(req);
    // Send errors to user
    const error = new Error('Invalid title or price!');
    error.descriptors = errors.array();
    if(!errors.isEmpty()){
        error.descriptors = errors.array();
        res.status(201).send(error.descriptors[0].msg);
        return;
    }

    // Retrieve ticket and check edge cases
    const ticket = await Ticket.findById(req.params.id);
    if (ticket == undefined) {
        res.status(201).send('No valid ticket found');
        return;
    }
    if (ticket.orderId != undefined) {
        res.status(201).send('Cannot edit a reserved ticket'); 
        return;
    }

    // Retrieve input and set on ticket
    const { title, price } = req.body;
    ticket.set({
        title,
        price,
    });
    await ticket.save();

    await axios.post('http://event-bus-clusterip-svc:4005/events', {
        type: 'TicketUpdated',
        data: {
        ticketId: ticket.id,
        title,
        price
        }
    });

    res.status(201).send(ticket);
});


// Events

app.post('/events', async (req, res) => {
    const { type, data } = req.body;
    console.log('Received Event', req.body.type);
    if (type === 'OrderCreated') {
        
        // Set order id on ticket - this will prevent further edits unless released
        const { ticketId, orderId } = data;
        const ticket = await Ticket.findById(ticketId);
        ticket.set({
            orderId
        });
        await ticket.save();

        await axios.post('http://event-bus-clusterip-svc:4005/events', {
        type: 'TicketUpdated',
        data: {
            ticketId, 
            title: ticket.title,
            price: ticket.price,
            orderId
        }
        });
    }
    else if (type === 'OrderCancelled') {

        // Remove order id from ticket - this will allow further edits
        const { ticketId } = data;
        const ticket = await Ticket.findById(ticketId);
        ticket.set({
            orderId: undefined
        });
        await ticket.save();

        await axios.post('http://event-bus-clusterip-svc:4005/events', {
        type: 'TicketUpdated',
        data: {
            ticketId, 
            title: ticket.title,
            price: ticket.price
        }
        });
    }

    res.send({});
});

app.listen(4001, () => {
    console.log('Listening on 4001');
});


