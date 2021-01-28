/*
index.js
@Author Clayton Cunningham

Ticket record program for StubHub clone.
*/

const express = require('express');
const bodyParser = require('body-parser');
const { randomBytes } = require('crypto');
const cors = require('cors');
const axios = require('axios');
const { body, validationResult } = require('express-validator');

const MongoClient = require('mongodb').MongoClient;

const app = express();
app.use(bodyParser.json());
app.use(cors());

const tickets = {};

const uri = "mongodb+srv://admin:12345@cluster0.l6u68.mongodb.net/<dbname>?retryWrites=true&w=majority";

// async function main() {
//   const client = new MongoClient(uri, { useNewUrlParser: true });
//   // client.connect(err => {
//   //   // const collection = client.db("test").collection("devices");
//   //   const collection = client.db().admin().listDatabases();
//   //   // perform actions on the collection object
//   //   // collection.databases.forEach(db => {
//   //   //   console.log(' - ${db.name}')
//   //   // });
//   //   console.log(collection)

//   //   client.close();
//   // });
//   try {
//     await client.connect();
//     collection = await client.db().admin().listDatabases(); 
//     collection.databases.forEach(db => {
//       console.log(' - '+ db.name)
//     });
//     console.log(collection);
//   }
//   catch(e) {
//     console.error(e)
//   }
// }

function errorHandler(err, req, res, next) {
  console.log('ERROR! - Something went wrong', err)

  res.status(400).send({
      message: `ERROR! - ${err.message}`
  })
}

app.get('/api/tickets', (req, res) => {
  // main();
  res.send(tickets || []);
});

app.get('/api/tickets/:id', (req, res) => {
  res.send(tickets[req.params.id] || []);
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

  const ticketId = randomBytes(4).toString('hex');
  const { title, price } = req.body;

  tickets[ticketId] = {
    ticketId,
    title,
    price
  };

  await axios.post('http://event-bus-clusterip-svc:4005/events', {
    type: 'TicketCreated',
    data: {
      id: ticketId,
      title,
      price
    }
  });

  res.status(201).send(tickets[ticketId]);
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
  if (tickets[ticketId] == undefined) {
    res.status(201).send('No valid ticket found');
    return;
  }
  if (tickets[ticketId].orderId != undefined) res.status(201).send('Cannot edit a reserved ticket'); 

  const { title, price } = req.body;

  tickets[ticketId] = {
    ticketId,
    title,
    price
  };

  await axios.post('http://event-bus-clusterip-svc:4005/events', {
    type: 'TicketUpdated',
    data: {
      id: ticketId,
      title,
      price
    }
  });

  res.status(201).send(tickets[ticketId]);
});

app.post('/events', async (req, res) => {
  const { type, data } = req.body;
  console.log('Received Event', req.body.type);
  if (type === 'OrderCreated') {
    const { ticketId, orderId } = data;

    tickets[ticketId].orderId = orderId;

    await axios.post('http://event-bus-clusterip-svc:4005/events', {
      type: 'TicketUpdated',
      data: {
        ticketId, 
        title: tickets[ticketId].title,
        price: tickets[ticketId].price,
        orderId
      }
    });
  }
  else if (type === 'OrderCancelled') {
    const { ticketId } = data;

    delete tickets[ticketId].orderId;

    await axios.post('http://event-bus-clusterip-svc:4005/events', {
      type: 'TicketUpdated',
      data: {
        ticketId, 
        title: tickets[ticketId].title,
        price: tickets[ticketId].price
      }
    });
  }

  res.send({});
});

app.listen(4001, () => {
  console.log('Listening on 4001');
});
