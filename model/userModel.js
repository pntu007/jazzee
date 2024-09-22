const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema(
    {
        name : {
            type: String,
            required : [true,'User must have a name']
        },
        email : {
            type : String,
            required : [true,'User must have an email id'],
            unique: true,
            lowercase: true,
            validate: [validator.isEmail, 'Please provide a valid email']
        },
        password : {
            type: String,
            required : [true,'User must have a password']
        },
        photo : {
            type : String
        },
        role : {
            type : String,
            enum : ['buyer','seller'],
            default : 'buyer'
        },
        active: {
            type: Boolean,
            default: true,
            select: false
        }
    }
);

const User = mongoose.model('User', userSchema);

module.exports = User;