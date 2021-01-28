const { getDBReference } = require('../lib/mongo');

// Make db call to get all tickets
exports.getTickets = async function() {
    const db = getDBReference()
    const collection = db.collection('tickets')

    const results = await collection.find({}).toArray()

    return results
}

exports.createTicket = async function (ticket) {
    const db = getDBReference()
    const collection = db.collection('tickets')
    
    const results = await collection.insertOne(ticket)

    return results
}