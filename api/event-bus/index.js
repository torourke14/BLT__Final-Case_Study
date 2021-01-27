const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
app.use(bodyParser.json());

const events = [];

app.post('/events', (req, res) => {
  const event = req.body;

  events.push(event);

  axios.post('http://orders-clusterip-svc:4000/events', event);
  axios.post('http://tickets-clusterip-svc:4001/events', event);
  axios.post('http://payments-clusterip-svc:4002/events', event);

  axios.post('http://query-clusterip-svc:4003/events', event);
  axios.post('http://moderate-clusterip-svc:4004/events', event);

  axios.post('http://auth-clusterip-svc:5000/events', event);

  res.send({ status: 'OK' });
});

app.get('/events', (req, res) => {
  res.send(events);
});

app.listen(4005, () => {
  console.log('Listening on 4005');
});
