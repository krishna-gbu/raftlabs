const mongoose = require('mongoose')




const magazSchema = new mongoose.Schema({
    title:String,
    isbn:String,
    authors:[String],
    publishedAt:String
    }
);

module.exports = mongoose.model('Magazine',magazSchema)