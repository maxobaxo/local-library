var mongoose = require('mongoose');

// define schema
var Schema = mongoose.Schema()

var AuthorSchema = new Schema({
    first_name: {type: String, required: true, max: 100},
    last_name: { type: String, required: true, max: 100 },
    date_of_birth: {type: Date},
    date_of_death: {type: Date}
});

// virtual for author's full name
AuthorSchema
    .virtual('name')
    .get(function() {
        return this.last_name + ', ' + this.first_name
    });

// virtual for author's URL
AuthorSchema
    .virtual('url')
    .get(function() {
        return '/catalog/author/' + this._id
    });

// export model
module.exports = mongoose.model('Author', AuthorSchema)
