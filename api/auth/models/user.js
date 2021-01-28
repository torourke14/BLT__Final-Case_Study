const mongoose = require('mongoose');
const Password  = require('../services/passwords');

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

userSchema.pre('save', async function (done){
    if (this.isModified('password')){
        const hashedPw = await Password.toHash(this.get('password'));
        this.set('password', hashedPw);
    }
    done();
});

const User = mongoose.model('User', userSchema);

module.exports = User;