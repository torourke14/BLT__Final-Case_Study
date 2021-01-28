const router = require('express').Router();
const { paymentSchhema } = require('../models/payments');

router.get('/api/payments', async (req, res, next) => {
    console.log("payment endpoint!")
    try {
        const payments = await paymentSchhema();

        res.status(200).send({
            payments: payments,
            successStatues: true,
        })
    } catch (err) {
        console.log("Error: ", err);
        next();
    }
})
module.exports = router;