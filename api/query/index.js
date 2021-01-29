const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');
const mongoose = require('mongoose');
const config = require('./dbconfig');


// --- configuration ---
const app = express();
app.use(bodyParser.json());
app.use(cors());

require('dotenv').config()
const db_url = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PW}@e-tickets-cluster.ovpau.mongodb.net/${process.env.MONGO_MAIN}?retryWrites=true&w=majority`

// --- db connection ---
mongoose.connect(db_url, { 
    useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true 
});
app.locals.db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error'));


/*
*   Title: handleEvent 
*   Params: type - eventType (string)
            data - req.body (JSON)
*   Response: The modified data object
*   Description: Depending on eventType as type, 
*                issues calls to our main database .
*/
const handleEvent = (type, data) => {
    if (type === "TicketCreated") {
        // FROM /tickets -> /event-bus:
            //-- INSERT into tickets         
        var { ticketId, title, price } = data;

        app.locals.db.tickets.insertOne({ 
            _id: ticketId, 
            title: title, 
            price: price, 
            userId: "?????",
            orderId: undefined
        });
    }
    if (type === "TicketUpdated") { 
        // FROM /tickets/:id -> /event-bus:
            //-- UPDATE ticket[ticketId].title+price
            //--> assumes ticket has empty orderId
        
        const { ticketId, title, price } = data;

        app.locals.db.tickets.findOneAndUpdate(
            { "_id": ticketId, "orderId": undefined },
            { $set: { "title": title, "price": price } },
            { returnNewDocument: true }
        );
    }
    if (type === "OrderCreated") {
        // FROM /orders -> /event-bus:
            //-- UPDATE tickets[ticketId].OrderId
            //-- INSERT *FULL* order into orders
        
        const { orderId, ticketId } = data;

        app.locals.db.tickets.findOneAndUpdate(
            { "_id": ticketId, "orderId": undefined },
            { $set: { "orderId": orderId } },
            { returnNewDocument: true }
        )
        .then(res => {
            if (res.orderId === 0) {
                throw "Query failure in OrderCreated ticket update"
            }
            app.locals.db.orders.insertOne({ 
                _id: orderId,
                userId: "???????????????",
                status: "Created", 
                ticketID: ticketId
            });
        })
        .catch(error => {
            console.error.bind(console, `MongoDB: failure in OrderCreated: ${error}`)
        });
    }
    if (type === "OrderCancelled") {
        // FROM /orders/:id =-> /event-bus:
            //-- DELETE  payments[orderId] (if any)
            //-- UPDATE  orders[orderId].status = "Cancelled"
            //-- UPDATE  tickets[orderId=orderId].orderId = undefined
        
        const { orderId } = data;

        app.locals.db.payments.deleteOne(
            { "orderId": orderId }
        )
        .then(res => {
            if (!res.acknowledged) {
                throw "Query failure in OrderCancelled payments"
            }
            app.locals.db.orders.findOneAndUpdate(
                { "_id": orderId },
                { $set: { status: "Cancelled" } },
                { returnNewDocument: true }
            )
        })
        .then(res => {
            if (res.status !== "Cancelled") {
                throw "Query failure in OrderCancelled orders"
            }
            app.locals.db.tickets.findOneAndUpdate(
                { orderId: orderId },
                { $set: { "orderId": undefined } },
                { returnNewDocument: true }
            );
        })
        .catch(error => {
            console.error.bind(console, `MongoDB failure on OrderCancel: ${error}`)
        });
    }
    if (type === "OrderExpired") {
        // FROM /moderation -> /event-bus:
            //-- UPDATE db.orders[orderId].status = "Cancelled"
            //-- UPDATE db.tickets[orderId=orderId].orderId = undefined
        
        const { orderId } = data;

        app.locals.db.tickets.findOneAndUpdate(
            { orderId: orderId },
            { $set: { "orderId": undefined } },
            { returnNewDocument: true }
        )
        .then(res => {
            if (res.orderId !== undefined) {
                throw "Query failure in OrderExpired ticket update"
            }
            app.locals.db.orders.findOneAndUpdate(
                { "_id": orderId },
                { $set: { status: "Expired" } },
                { returnNewDocument: true }
            )
        })
        .catch(error => {
            console.error.bind(console, `MongoDB failure on OrderExpired: ${error}`)
        });
    }

    if (type === "ChargeCreated") {
        // FROM /payments --> /event-bus:
            //-- INSERT db.payments
            //-- UPDATE db.orders[orderId].status = "Completed" -----?????

        const {/*orderId,*/ status, amount, stripeId, stripeRefundId } = data;
        
        app.locals.db.payments.insertOne({ 
            orderID: ___, 
            status: status, 
            amount: amount, 
            stripeId: stripeId, 
            stripeRefundId: stripeRefundId
        });
    } 

    if (type === "UserCreated") {
        //-- FROM /user/signup --> /event-bus:
            //-- INSERT user into db.users
        /* ---------------------------------This has to be moved?? */
        const { email, password } = data;
        
        return app.locals.db.users.insertOne({ email, password });
    }
    if (type === "UserUpdated") {
        // FROM /auth/sign[in/out] --> /event-bus
            //-- UPDATE db.users[orderId]??? current_user???
        /* ------------------------------This has to be moved?? */
        const { email, password } = data;

        current_user = { email, password }
    }
};

app.post('/events', (req, res) => {
    const { type, data } = req.body;
    console.log('Event Received:', req.body.type);

    handleEvent(type, data)

    res.send({ status: 'OK' });
});



/*  
*   Title: GET orders/:id
*   Params: orderId
*   Return: db.orders[orderId]
*   Description: Get details about a specific order
*/
app.get('/orders/:id', (req, res) => {
    var order = db.payments.find({
        "_id": req.body.orderId
    });
    var ticket = db.tickets.find({
        "orderId": req.body.orderId
    });

    res.send({
        userId: order
    });
});


/*  
*   Title: Get User Orders
*   Params: none
*   Return: db.orders[userId]
*   Description: Get order info for a specific user
*/
/*------------------------
HANDLE IN ORDERS CLUSTER 
-----------------------------
app.get('/orders', (req, res) => {
    var user_orders = db.orders.find({
        "userId": req.body.userId
    })
    res.send(user_orders);
});
*/


/*  Title: GET tickets 
*   Params: none
*   Return: All Tickets
*/
/*------------------------
HANDLE IN TICKETS
-----------------------------
app.get('/tickets', (req, res) => {
    var tickets = db.tickets.find();
    res.send(tickets);
});
*/


/*  Title: GET tickets/:id
*   Params: ticketId
*   Return: tickets[ticketId]
*/
/*------------------------
HANDLE IN TICKETS
-----------------------------
app.get('/tickets/:id', (req, res) => {
    var ticket = db.tickets.find({ 
        "_id": req.params.id
    });
    res.send(ticket);
});
*/


app.listen(3500, async () => {
    console.log('query service listening on 3500! Feed me queries!');

    const res = await axios.get('http://event-bus-clusterip-svc:4005/events');

    for (let event of res.data) {
        console.log('Processing event:', event.type);
        handleEvent(event.type, event.data);
     }
});