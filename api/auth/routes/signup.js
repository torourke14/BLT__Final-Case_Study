/*signup.js
@Author Sean Edwards
@Version 20212701

Sign up router for StubHub clone.
*/

const express = require('express');
const { body, validationResult } = require('express-validator');
const User = require('../models/user');
const jwt = require('jsonwebtoken');

require('dotenv').config();

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
            console.log(`WARNING - An account for the email \'${email}\' already exists, please choose another.`);
            return res.send({});

        //Else create new user, hash password, and save to database.
        }else{
            const user = new User({email, password});

            //Save user to database.
            await user.save();

            //Create JSON web token
            const userJwt = jwt.sign({
                id: user.id,
                email: user.email
            }, `${process.env.JWT_KEY}`);

            //Store jwt on session object
            req.session = {
                jwt: userJwt
            };

            res.status(201).send(user);
        }
    }
);

module.exports = router;