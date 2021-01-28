const router = require('express').Router(); 
const { getOrders } = require('../models/orders')

// This will GET /api/orders 
// Get all orders
router.get('/', async (req, res, next) => {
    console.log("Hit /orders")
    try {
        const orders = await getOrders();
        res.status(200).send({
            orders: orders
        })
    } catch(err) {
        console.log(err)
        res.status(400).send({
            status: 'failed to connect to db'
        })
    }
});

// GET /api/orders/:id
// Get single order
router.get('/:id', async(req, res, next) => {

})

// POST /api/orders
// Create a order
router.post('/', async(req, res, next) => {

})

// PUT /api/orders/:id
router.put('/:id', async(req, res, next) => {

})

module.exports = router;