const express = require('express'),
    bodyParser = require('body-parser');
    axios = require('axios'),
    mongoose = require('mongoose'),
    dbconfig = require('./dbconfig'),
    moment = require('moment');


// --- configuration ---
const app = express();
app.use(bodyParser.json());

require('dotenv').config()
const db_url = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PW}@e-tickets-cluster.ovpau.mongodb.net/${process.env.MONGO_EVENTS}?retryWrites=true&w=majority`

// --- db connection ---
mongoose.connect(db_url, { 
    useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true 
});
app.locals.db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error'));
//const events = [];


app.post('/events', (req, res) => {
  const event = req.body;

  app.locals.events.insertOne({event, timestamp});

  axios.post('http://orders-clusterip-svc:4000/events', event);
  axios.post('http://tickets-clusterip-svc:4001/events', event);
  axios.post('http://payments-clusterip-svc:4002/events', event);

  axios.post('http://query-clusterip-svc:3500/events', event);
  axios.post('http://moderate-clusterip-svc:4003/events', event);

  axios.post('http://auth-clusterip-svc:5000/events', event);

  res.send({ status: 'OK' });
});


app.get('/events', (req, res) => {
    const events = app.locals.db.events.find()
  res.send(events);
});


app.listen(4005, () => {
  console.log('event-bus listening on 4005');
});
