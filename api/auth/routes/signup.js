/*signup.js
@Author Sean Edwards
@Version 20212701

Sign up router for StubHub clone.
*/

const express = require('express');
const { body, validationResult } = require('express-validator');
const User = require('../models/user');
//const jwt = require('jsonwebtoken');

const router = express.Router();

router.post('/api/users/signup', [
        body('email')
            .isEmail()
            .withMessage('Email is invalid, provide a valid email address.'),
        body('password')
            .trim()
            .notEmpty()
            //6 character minimum for passwords.
            .isLength({min: 6})
            .withMessage('Password must be at least 6 characters in length!')
    ],
    async (req, res) => {
        const errors = validationResult(req);

        if(!errors.isEmpty()){
            error.descriptors = errors.array();
            throw error;
        }
        
        //Query database for matching email address
        const { email, password } = req.body;

        const existingUser = await User.findOne({ email });

        //If user exists send warning
        if(existingUser){
            console.log("WARNING - This user email already exists in the database.");
            return res.send({});

        //Else create new user, hash password, and save to database.
        }else{
            const user = new User({email, password});

            //Save user to database.
            await user.save();
            res.status(201).send(user);
        }
    }
);

module.exports = router;