const { getDBReference } = require('../lib/mongo');
var mongoose = require('mongoose')
var Schema = mongoose.Schema

// User Schema
var UserSchema = new Schema({
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
});