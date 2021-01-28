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
            
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// mongoose => ODM ( object document model )

// object Model

app.get('/', (req, res) => {
    Order.find({}, (err, orders) => {
        if (err) throw err
        console.log("Here are the orders")
        console.log(orders)
        res.send(orders)
    })
});
app.post('/',  async (req, res) => {
    let { body } = req
 
    const order = new Order({ ...body})
    await order.save()
    res.status(201).json({ order })
})
app.post('/delete',  async (req, res) => {
    let { body } = req
 
    const condition = { ...body}
    Order.deleteMany(condition, (err, orders) => {
        if (err) throw err
        console.log("Here are all the orders")
        console.log(orders)
        res.status(201).json({ orders })
    })
    
})

const order = new Order({
    userId: 1, status:  'pending', ticketId: 1, expiresAt: new Date()

})

order.save().then(() => {
    console.log("new order saved");
    // // get all customers
})
//deletes everything before starting the datbase
Order.deleteMany({}, (err, orders) => {
    if (err) throw err
    console.log("Here are all the orders")
    console.log(orders)
    
})



const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
/**
 * 
 * {"_id":{"$oid":"5ff372e52917de48e1917ba1"},"name":"NAG","address":"chennai-india","__v":{"$numberInt":"0"}}
 * 
 */

/*Customer.findByIdAndUpdate("5ff372e52917de48e1917ba1", { address: 'chennai' }, (err, result) => {
    if (err) throw err;
    console.log(result)
})*/
