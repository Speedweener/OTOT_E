// contactModel.js
import mongoose from 'mongoose';

var Schema = mongoose.Schema

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
// Export pokemon model
export default mongoose.model('pokemons', pokemonSchema)

