const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email:{
        type: String,
        require: true
    },
    password:{
        type: String,
        require: true
    }
});

const User = mongoose.model('User', userSchema);

//Testing mongoose User 
// let x = new User({
//     email: 'abc@123.com',
//     password: '123abc'
// });

module.exports = User;