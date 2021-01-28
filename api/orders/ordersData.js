const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    userId: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    ticketId: {
        type: Number,
        required: true
    },
    expiresAt: {
        type: Date
    }
});

const Order = mongoose.model('Order', schema, 'orders')

module.exports = {
    Order
}

