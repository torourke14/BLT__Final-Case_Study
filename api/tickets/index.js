const express = require('express');
const bodyParser = require('body-parser');
const { randomBytes } = require('crypto');
const cors = require('cors');
const axios = require('axios');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const tickets = {};

app.get('/api/tickets', (req, res) => {
  res.send(tickets || []);
});

app.get('/api/tickets/:id', (req, res) => {
  res.send(tickets[req.params.id] || []);
});

app.post('/api/tickets', async (req, res) => { //posts/:id/comments
  const ticketId = randomBytes(4).toString('hex');
  const { title, price } = req.body;

  tickets[ticketId] = {
    ticketId,
    title,
    price
  };

  // await axios.post('http://event-bus-clusterip-svc:4005/events', {
  //   type: 'TicketCreated',
  //   data: {
  //     id: ticketId,
  //     title,
  //     price
  //   }
  // });

  res.status(201).send(tickets[ticketId]);
});

app.put('/api/tickets/:id', async (req, res) => { //posts/:id/comments
  const ticketId = req.params.id;
  const { title, price } = req.body;

  tickets[ticketId] = {
    ticketId,
    title,
    price
  };

  // await axios.post('http://event-bus-clusterip-svc:4005/events', {
  //   type: 'TicketUpdated',
  //   data: {
  //     id: ticketId,
  //     title,
  //     price
  //   }
  // });

  res.status(201).send(tickets[ticketId]);
});

// app.post('/events', async (req, res) => {
//   console.log('Event Received:', req.body.type);
//   const { type, data } = req.body;
//   console.log('Received Event', req.body.type);
//   if (type === 'CommentModerated') {
//     const { postId, id, status, content } = data;
//     const comments = tickets[postId];

//     const comment = comments.find(comment => {
//       return comment.id === id;
//     });
//     comment.status = status;

//     await axios.post('http://event-bus-clusterip-svc:4005/events', {
//       type: 'TicketUpdated',
//       data: {
//         id,
//         status,
//         postId,
//         content
//       }
//     });
//   }

//   res.send({});
// });

app.listen(4001, () => {
  console.log('Listening on 4001');
});
