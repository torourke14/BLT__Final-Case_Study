/*currentuser.js
@Author Sean Edwards
@Version 20212701

current user information router for StubHub clone.
*/

const express = require('express');
//const currentUser = require('@sgtickets/common');

const router = express.Router();

router.get('/api/users/currentuser', /*currentUser,*/ (req, res) => {
    res.send({/*currentUser: req.currentUser ||null*/});
});

module.exports = router;