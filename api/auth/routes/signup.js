/*
signup.js
@Author Sean Edwards
@Version 20212701

Sign up router for StubHub clone.
*/

const express = require('express');
const { body, validationResult } = require('express-validator');

const router = express.Router();

router.post('/api/users/signup', [
        body('email')
            .isEmail()
            .withMessage('Email is invalid, provide a valid email address.'),
        body('password')
            .trim()
            
            //6 character minimum for passwords.
            .isLength({min: 6})
            .withMessage('Password must be at least 6 characters in length!')
    ],
    (req, res) => {
        const errors = validationResult(req);

        //Display errors to user
        const error = new Error('Invalid email or password!');
        error.descriptors = errors.array();

        if(!errors.isEmpty()){
            const error = new Error('Invalid email or password!');
            error.descriptors = errors.array();
            throw error;
        }
        
        const {email, password} = req.body;
        
        console.log('Successfully validated! User creation initiated...');

        res.send({});
});

module.exports = router;