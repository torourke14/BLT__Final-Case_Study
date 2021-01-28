/*signout.js
@Author Sean Edwards
@Version 20212701

Sign out router for StubHub clone.
*/

const express = require('express');

const router = express.Router();

router.post('/api/users/signout', (req, res) => {
    req.session = null;
    res.send({});
});

module.exports = router;