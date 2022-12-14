const mongoose = require('mongoose')
const valid = require('validator')


const authorSchema = new mongoose.Schema({
    firstName:String,
    lastName:String,
    email:{
        type:String,
        unique:true,
        required:[true,'Please provide a email address'],
        validate:[valid.isEmail,'Please enter a valid email'],
        lowercase:true,
     }
    }
);

module.exports = mongoose.model('Author',authorSchema)