const express = require('express');

const router = express.Router();

router.post('/api/users/signin', (req, res) => {
    res.send(`current user router`);
});

module.exports = router;