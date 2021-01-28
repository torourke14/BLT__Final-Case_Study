const { getDBReference } = require('../lib/mongo');

// Make db call to get all orders
exports.getOrders = async function() {
    console.log("In order model")
    const db = getDBReference()
    const collection = db.collection('orders')

    const results = await collection.find({}).toArray()

    return results
}