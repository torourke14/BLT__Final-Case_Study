const express = require('express');
const bodyParser = require('body-parser');
const { randomBytes } = require('crypto');
const cors = require('cors');
const axios = require('axios');
const {Order} = require('./ordersData');
const app = express();
app.use(bodyParser.json());
app.use(cors());

const mongoose = require('mongoose');

const uri = "mongodb+srv://Ranjani:Kardya123@cluster0.wsa8q.mongodb.net/myDB?retryWrites=true&w=majority";
//the uri for the mongoDB that I created on the internet            
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
//makes sure the mongoDB follows the structure of mongoose
// mongoose => ODM ( object document model )

// object Model
//getting all the orders
app.get('/', (req, res) => {
    Order.find({}, (err, orders) => {
        if (err) throw err
        console.log("Here are the orders")
        console.log(orders)
        res.send(orders)
    })
});
//getting individual orders by id
app.get('/:id', (req, res) => {
    Order.find({ticketId: req.params.id}, (err, orders) => {
        if (err) throw err
        console.log("Here are the orders")
        console.log(orders)
        res.send(orders)
    })
});
//put a new order in the database, and the request body is a json object of the order followed by the mongoose structure. 
/*Sample: {"userId": 1, "status": "completed", "tickedId": 1, "Date": "2021-01-28T07:45:26.630Z"} */
app.post('/',  async (req, res) => {
    let { body } = req
 
    const order = new Order({ ...body})//order object with broken json data
    await order.save()//puts it in database
    await axios.post('http://event-bus-clusterip-svc:4005/events', {
            type: "OrderCreated",
            data: {
              orderId : order._id,
              ticketId: order.ticketId
            }
          });
    res.status(201).json({ order })
})
//please look at this one, it takes a long time to load, Nag put some documentation in Slack
app.post('/:id/update',  async (req, res) => {
    let { body } = req //request is a json object for the status update e.g {"status": "Created"}
 
    Order.findOneAndUpdate({ticketId: req.params.id},{$set:{...body}}, {
        new: true
    });
   
})
//deletes an item by its ticket id
app.delete('/:id',  async (req, res) => {
    let body = { _id: req.params.id }
 
    const condition = { ...body}//the orders with that id need to be deleted
    Order.deleteOne(condition, (err, orders) => {
        if (err) throw err
        console.log("Here are all the orders")
        console.log(orders)
        await axios.post('http://event-bus-clusterip-svc:4005/events', {
            type: "OrderCancelled",
            data: {
              orderId : req.params.id
            }
          });
        
        res.status(201).json({ orders })
    })
    
})


//the correct port according to the event bus
const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
/**
 * 
 * {"_id":{"$oid":"5ff372e52917de48e1917ba1"},"name":"NAG","address":"chennai-india","__v":{"$numberInt":"0"}}
 * 
 */

app.listen(4000, () => {
  console.log('orders service listening on 4000');
});

