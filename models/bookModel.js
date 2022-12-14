const mongoose = require('mongoose')


// title;isbn;authors;description

const bookSchema = new mongoose.Schema({
    title:String,
    isbn:String,
    authors:[String],
    description:String
    }
);

module.exports = mongoose.model('Book',bookSchema)