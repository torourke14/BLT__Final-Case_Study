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
        /* from POST /tickets 
            -- INSERT tickets
        */         
        var { ticketId, title, price } = data;

        var newTicket = app.locals.db.tickets.insertOne({ 
            _id: ticketId, 
            title: title, 
            price: price, 
            userId: "?????",
            orderId: undefined
        });
        
        if (newTicket.acknowledged) {
            return newTicket.insertedId;
        }
        return {}
    }
    if (type === "TicketUpdated") { 
        /* from DELETE /tickets/:id
            -- UPDATE ticket[ticketId].title|price
        */
        const { ticketId, title, price } = data;

        // Fails if valid/non-zero orderId is present
        var updatedTicket = app.locals.db.tickets.findOneAndUpdate(
            { "_id": ticketId, "orderId": undefined },
            { $set: { "title": title, "price": price } },
            { returnNewDocument: true }
        )

        if (updatedTicket.acknowledged) {
            return updatedTicket
        }
        return {}
    }
    if (type === "OrderCreated") {
        /* FROM POST /orders:
            -- UPDATE tickets[ticketId].OrderId
            -- INSERT into orders
        */
        const { orderId, ticketId } = data;

        app.locals.db.tickets.findOneAndUpdate(
            { "_id": ticketId, "orderId": 0},
            { $set: { "orderId": orderId } }, /* || res.insertedId */
            { returnNewDocument: true }
        )
        .then(res => {
            if (res.orderId === 0) {
                throw "Order already created."
            }
            app.locals.db.orders.insertOne({ 
                _id: orderId,
                userId: "???????????????",
                status: "Created", 
                ticketID: ticketId
            })
        })
        .then(res => {
            if (res.acknowledged) {
                return order
            }
            return {}
        })
        .catch(error => {
            console.error.bind(console, 'MongoDB failed Order Cancel')
        });
    }
    if (type === "OrderCancelled") {
        /* FROM /orders/:id 
            -- DELETE  payments[orderId] (if any)
            -- UPDATE  orders[orderId].status = "Cancelled"
            -- UPDATE  tickets[orderId=orderId].orderId = 0
        */
        const { orderId } = data;

        app.locals.db.payments.deleteOne(
            { "orderId": orderId }
        )
        .then(res => {
            if (!res.acknowledged) {
                throw "Order couldnt be cancelled."
            }
            app.locals.db.orders.findOneAndUpdate(
                { "_id": orderId },
                { $set: { status: "Cancelled" } },
                { returnNewDocument: true }
            )
        })
        .then(res => {
            if (res.status !== "Cancelled") {
                throw "Couldnt complete OrderCancel"
            }
            app.locals.db.tickets.findOneAndUpdate(
                { orderId: orderId },
                { $set: { "orderId": undefined } },
                { returnNewDocument: true }
            );
        })
        .then(res => {
            if (res.orderId === undefined) {
                return order
            }
            return {}
        })
        .catch(error => {
            console.error.bind(console, `MongoDB failed OrderCancel: ${error}`)
        });
    }
    if (type === "OrderExpired") {
        /* FROM /expiration
            -- UPDATE db.orders[orderId].status = "Cancelled" ---------------------- "Cancelled" ?????????
            -- UPDATE db.tickets[orderId=orderId].orderId to 0
        */
        const { orderId } = data;

        app.locals.db.tickets.findOneAndUpdate(
            { orderId: orderId },
            { $set: { "orderId": undefined } },
            { returnNewDocument: true }
        )
        .then(res => {
            if (res.orderId !== undefined) {
                throw "Couldnt expire Order"
            }
            return app.locals.db.orders.findOneAndUpdate(
                { "_id": orderId },
                { $set: { status: "Expired" } },
                { returnNewDocument: true }
            )
        })
        .catch(error => {
            console.error.bind(console, 'MongoDB failed Order Cancel')
        });
    }

    if (type === "ChargeCreated") {
        /* FROM /expirations
            -- INSERT db.payments
            -- UPDATE db.orders[orderId].status = "Completed"
        */
        const {/*orderId,*/ status, amount, stripeId, stripeRefundId } = data;
        
        app.locals.db.payments.insertOne({ 
            orderID: ___, 
            status: status, 
            amount: amount, 
            stripeId: stripeId, 
            stripeRefundId: stripeRefundId
        });

        //order.status = "Created" 
        // --------------------------------??????
    } 

    if (type === "UserCreated") {
        /* ACTIONS: 
            -- INSERT user into db.users
        */
        /* ---------------------------------This has to be moved?? */
        const { email, password } = data;
        
        return app.locals.db.users.insertOne({ email, password });
    }
    if (type === "UserUpdated") {
        /* ACTIONS: 
            -- UPDATE db.users[orderId]??? current_user???
        */
        /* ------------------------------This has to be moved?? */
        const { email, password } = data;

        current_user = { email, password }
    }
};

/*  Title: handleEvent 
*   Params
*   Return:
*   Description: 
*/
app.post('/events', (req, res) => {
    const { type, data } = req.body;
    console.log('Event Received:', req.body.type);
    //handleEvent(type, data);
    //res.send({});
    
    res.send(handleEvent(type, data));
});


/*  Title: handleEvent 
*   Params
*   Return:
*   Description: 
*/
app.get('/users/currentuser', (req, res) => {
    var user = db.user.find({ "email": req.body.email, "password": req.body.password})
    res.send(orders);
});



/*  Title: handleEvent 
*   Params
*   Return:
*   Description: 
*/
app.get('/tickets', (req, res) => {
    var tickets = db.tickets.find();
    res.send(tickets);
});

app.get('/tickets/:id', (req, res) => {
    var ticket = db.tickets.find({ 
        "_id": req.params.id
    });
    res.send(ticket);
});

  
/*
*   Title: handleEvent 
*   Params
*   Return:
*    Description: 
*/
app.get('/orders', (req, res) => {
    var user_orders = db.orders.find({
        "userId": req.body.userId
    })
    res.send(user_orders);
});

app.get('/orders/:id', (req, res) => {
    var order = db.payments.find({
        "_id": req.body.orderId
    });
    res.send(order);
});



app.listen(3500, async () => {
    console.log('query service listening on 3500! Feed me queries!');

    const res = await axios.get('http://event-bus-clusterip-svc:4005/events');

    for (let event of res.data) {
        console.log('Processing event:', event.type);
        handleEvent(event.type, event.data);
     }
});


/*
function invokeExpiration(ticketId) {
    axios.delete('http://event-bus-clusterip-svc:4005/events', {
        type: 'OrderExpired',
        data: { ticketId }
    })
};


const expiresAt = setTimeout(invokeExpiration.bind(null, ticketId), 900000);

const client = redis.createClient();

// Set a value
client.set('key', ticketId);
// Expire in 15 minutes
client.expire('string key', 900000);

// Runs every second until the timeout occurs on the value
var expirationTimer = setInterval(function() {
    client.get('string key', function (err, reply) {
        if(reply) {
            console.log('I live: ' + reply.toString());
            client.ttl('string key', writeTTL);
        } else {
            clearTimeout(expirationTimer);
            //console.log('I expired');
            client.quit();
        }
    });
}, 1000);

function writeTTL(err, data) {
    console.log('Time until expiration: ' + toString(data / 1000));
}
----------------------------------------------------------------------
function setObject (key, obj, expireSeconds = null) {
    this.client.set(key, JSON.stringify(obj), (err, res) => {
      if (err) {
        this.logger.error(err);
        return;
      }
      this.logger.info(`set ${key} for ${expireSeconds} seconds`);
    });
    if (expireSeconds) {
      this.client.expire(key, expireSeconds);
    }
  }
*/
