var mongoose = require('mongoose');

// define schema
var Schema = mongoose.Schema()

var BookSchema = new Schema({
    title: { type: String, required: true},
    author: { type: Schema.ObjectId, ref: 'Author', required: true},
    summary: { type: String, required: true },
    isbn: { type: String, required: true },
    genre: [{ type: Schema.ObjectId, ref: 'Genre', required: true}]
});

// virtual for book's URL
BookSchema
    .virtual('url')
    .get(function () {
        return '/catalog/book/' + this._id
    });

// export model
module.exports = mongoose.model('Book', BookSchema)
