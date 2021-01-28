const router = require('express').Router(); 
const { getTickets, createTicket } = require('../models/tickets')
// This will GET /api/tickets because index.js takes care of /api/tickets routing
router.get('/', async (req, res, next) => {
    console.log(" -- Hit the get movies endpoint")
    try {
        const tickets = await getTickets();

        res.status(200).send({
            tickets: tickets,
            successStatus: true
        })
    } catch (err) {
        console.log("Error: ", err);
        next();
    }
});

// GET /api/tickets/:id
// Get single ticket
router.get('/:id', async(req, res, next) => {

})

// POST /api/tickets
// Create a ticket
router.post('/', async(req, res, next) => {
    try {
        const ticket = req.body 
        await createTicket(ticket)
        res.status(200).send({
            successStatus: true
        })
    } catch (err) {
        console.log("Error: ", err);
        next();
    }
})

// PUT /api/tickets/:id
router.put('/:id', async(req, res, next) => {

})

module.exports = router;