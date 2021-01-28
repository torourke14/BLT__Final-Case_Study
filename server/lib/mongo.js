const mongoUrl = 'mongodb+srv://root:letmein12345@e-tickets-cluster.ovpau.mongodb.net/ticket-shop?retryWrites=true&w=majority'

const {MongoClient} = require('mongodb')
let db = null 

exports.connectToDB = function(callback) {
    MongoClient.connect(mongoUrl, function(err, client) {
        if(err) {
            throw err;
        }
        db = client.db('ticket-shop')
        callback();
    })
}

exports.getDBReference = function () {
    return db;
}