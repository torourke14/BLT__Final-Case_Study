/*signin.js
@Author Sean Edwards
@Version 20212701

Sign in router for StubHub clone.
*/

const express = require('express');

const router = express.Router();

router.post('/api/users/signin', (req, res) => {
    res.send(`current user router`);
});

module.exports = router;