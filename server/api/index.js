const router = require('express').Router();

router.use('/api/orders', require('./orders'));
router.use('/api/tickets', require('./tickets'));
router.use('/api/users', require('./users'));

module.exports = router;