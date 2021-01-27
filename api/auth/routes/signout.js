const express = require('express');

const router = express.Router();

router.post('/api/users/signout', (req, res) => {
    res.send(`User sign out router.`);
});

module.exports = router;