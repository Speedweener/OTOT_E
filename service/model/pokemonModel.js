// contactModel.js
var mongoose = require('mongoose');
// Setup schema
var pokemonSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    type_1: {
        type: String,
        required: true
    },
    type_2: {
        type: String,
        required: true
    },
    gender: String,
    caught_date: {
        type: Date,
        default: Date.now
    }
});
// Export Contact model
var Pokemon = module.exports = mongoose.model('pokemon', pokemonSchema);
module.exports.get = function (callback, limit) {
    Pokemon.find(callback).limit(limit);
}