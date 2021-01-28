/*signup.js
@Author Sean Edwards
@Version 20212701

Sign up router for StubHub clone.
*/

const express = require('express');
const { body, validationResult } = require('express-validator');
const User = require('../models/user');

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
    async (req, res) => {
        const errors = validationResult(req);

        if(!errors.isEmpty()){
            error.descriptors = errors.array();
            throw error;
        }
        
        //Query database for matching email address
        const { email, password } = req.body;

        // const existingUser = await User.findOne({ email });

        // if(existingUser){
        //     console.log("WARNING - This user email already exists in the database.");
        //     return res.send({});
        // }else{
            const user = new User({email, password});
            console.log(user);

            res.status(201).send(user);
            //Save user to database.
            //await user.save();
        //}
    }
);

module.exports = router;