/*
 *  index.js
 *  @Author Clayton Cunningham
 *
 *  Ticket record program for StubHub clone.
*/

const express = require('express');
const bodyParser = require('body-parser');
const { randomBytes } = require('crypto');
const cors = require('cors');
const axios = require('axios');
const { body, validationResult } = require('express-validator');
const { Ticket } = require('./models/ticket.js');
const mongoose = require('mongoose');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const uri = "mongodb+srv://admin:12345@cluster0.l6u68.mongodb.net/<dbname>?retryWrites=true&w=majority";

mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true})

// function errorHandler(err, req, res, next) {
//   console.log('ERROR! - Something went wrong', err)

//   res.status(400).send({
//       message: `ERROR! - ${err.message}`
//   })
// }

app.get('/api/tickets', (req, res) => {
  // main();

    Ticket.find({}, (err, tickets) => {
        if (err) throw err
        console.log("Here are the tickets")
        console.log(tickets)
        res.send(tickets || [])
    })
});


app.get('/api/tickets/:id', (req, res) => {

    Ticket.findById(req.params.id, (err, ticket) => {
        if (err) throw err
        console.log("Here is the ticket")
        console.log(ticket)
        res.send(ticket || [])
    })

});


app.post('/api/tickets', [
    body('title').not().isEmpty().withMessage('Title is required'),
    body('price')
        .isFloat({ gt: 0 })
        .withMessage('Price must be greater than 0'),
    ],
    async (req, res) => {

    const errors = validationResult(req);

    //Send errors to user
    const error = new Error('Invalid title or price!');
    error.descriptors = errors.array();

    if(!errors.isEmpty()){
        error.descriptors = errors.array();
        res.status(201).send(error.descriptors[0].msg);
        return;
    }

    const { title, price } = req.body;

    const ticket = new Ticket({
        title,
        price
    });
    await ticket.save();

    await axios.post('http://event-bus-clusterip-svc:4005/events', {
        type: 'TicketCreated',
        data: {
        ticketId,
        title,
        price
        }
    });

    res.status(201).send(ticket);
});


app.put('/api/tickets/:id', [
    body('title').not().isEmpty().withMessage('Title is required'),
    body('price')
        .isFloat({ gt: 0 })
        .withMessage('Price must be greater than 0'),
    ],
    async (req, res) => { 

    const errors = validationResult(req);
    //Send errors to user
    const error = new Error('Invalid title or price!');
    error.descriptors = errors.array();
    if(!errors.isEmpty()){
        error.descriptors = errors.array();
        res.status(201).send(error.descriptors[0].msg);
        return;
    }

    const ticketId = req.params.id;
    const ticket = await Ticket.findById(req.params.id);
    if (ticket == undefined) {
        res.status(201).send('No valid ticket found');
        return;
    }
    if (ticket.orderId != undefined) {
        res.status(201).send('Cannot edit a reserved ticket'); 
        return;
    }

    const { title, price } = req.body;
    ticket.set({
        title,
        price,
    });
    await ticket.save();
    console.log(ticket)

    await axios.post('http://event-bus-clusterip-svc:4005/events', {
        type: 'TicketUpdated',
        data: {
        ticketId,
        title,
        price
        }
    });

    res.status(201).send(ticket);
});

app.post('/events', async (req, res) => {
    const { type, data } = req.body;
    console.log('Received Event', req.body.type);
    if (type === 'OrderCreated') {
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


