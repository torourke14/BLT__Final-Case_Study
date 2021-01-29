const mongoose = require('mongoose');
const Password  = require('../services/passwords');

const userSchema = new mongoose.Schema(
    {
        email:{
            type: String,
            require: true
        },
        password:{
            type: String,
            require: true
        },
    },
    {
        toJSON: {
            transform(doc, ret) {
                ret.id = ret._id;
                delete ret._id;
                delete ret.password;
                delete ret.__v;
            }
        }
    }
);

userSchema.pre('save', async function (done){
    if (this.isModified('password')){
        const hashedPw = await Password.toHash(this.get('password'));
        this.set('password', hashedPw);
    }
    done();
});

const User = mongoose.model('User', userSchema);

module.exports = User;