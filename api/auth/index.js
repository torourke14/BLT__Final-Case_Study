/*
index.js
@Author Sean Edwards
@Version 20212701

User sign up/in/out authentication program for StubHub clone.
*/

//Dependencies
const express = require('express');
const bodyParser = require('body-parser');
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

app.use(errorHandler);

app.listen(5000, () => {
  console.log('Listening in on port 5000!');
});
