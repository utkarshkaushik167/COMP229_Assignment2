let mongoose = require('mongoose');

// create a model class
let listModel = mongoose.Schema({
    name: String,
    number: String,
    email: String
},
{
    collection: "contact_list"
});

module.exports = mongoose.model('List', listModel);