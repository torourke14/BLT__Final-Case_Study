/*signin.js
@Author Sean Edwards
@Version 20212701

Sign in router for StubHub clone.
*/

const express = require('express');
const { body, validationResult } = require('express-validator');
const User = require('../models/user');
const Password = require('../services/passwords');
const jwt = require('jsonwebtoken');

require('dotenv').config();

const router = express.Router();

router.post('/api/users/signin',
    [
        body('email')
            .isEmail()
            .withMessage('Email is invalid, provide a valid email address.'),
        body('password')
            .trim()
            .notEmpty()
            .withMessage('You must enter a password.')
    ],
    async (req, res) => {
        const errors = validationResult(req);
        
        if(!errors.isEmpty()){
            return res.status (400).send(errors.array());
        }

        const { email, password } = req.body;

        const existingUser = await User.findOne({ email });
        if (!existingUser) {
            return res.status (400).send("Username not found!");
          }

        const doPasswordsMatch = await Password.compare(
            existingUser.password,
            password
          );
          if (!doPasswordsMatch) {
            console.log('Invalid password entered.');
            return res.status (400).send("Invalid Password");
          }
      
          //Create JSON web token
          const userJwt = jwt.sign(
            {
              id: existingUser.id,
              email: existingUser.email,
            },
            `${process.env.JWT_KEY}`
          );
      
          // Store jwt on the session object
          req.session = {
            jwt: userJwt,
          };
      
          console.log(`Existing user \'${existingUser.email}\' found!`);
          res.status(200).send(existingUser);
    }
);

module.exports = router;