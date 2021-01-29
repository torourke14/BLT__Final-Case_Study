/*
 *  ticket.js
 *  @Author Clayton Cunningham
 *
 *  Ticket record schema
*/

const mongoose = require('mongoose');

var ticketSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    userId: {
        type: String,
    },
    orderId: {
        type: String,
    }
});


var Ticket = mongoose.model('Ticket', ticketSchema);
module.exports = {
    Ticket
}
