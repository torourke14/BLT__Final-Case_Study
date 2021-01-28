/*
index.js
@Author Sean Edwards
@Version 20212701

User sign up/in/out authentication program for StubHub clone.
*/

//Dependencies
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const currentUserRouter = require('./routes/currentuser');
const userSignUpRouter = require('./routes/signup');
const userSignInRouter = require('./routes/signin');
const userSignOutRouter = require('./routes/signout');

const errorHandler = require('./middlewares/errorhandler');

//Router setup
const app = express();
app.use(bodyParser.json());
app.use(currentUserRouter);
app.use(userSignUpRouter);
app.use(userSignInRouter);
app.use(userSignOutRouter);

//Middleware setup
app.use(errorHandler);

const startAuth = async () => {

  //Try to connect to db
  try{
  
    //Link to database
    await mongoose.connect('mongodb+srv://root:letmein12345@e-tickets-cluster.ovpau.mongodb.net/ticket-shop?retryWrites=true&w=majority', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    });

    console.log('Successfully connected to database!');
  }catch (err){
    console.error(`Error connecting to database: ${err}`);
  }

  //Start listening to traffic
  app.listen(5000, () => {
    console.log('Listening in on port 5000!');
  });
};

startAuth();