import PokemonModel from './pokemonModel.js';

//Set up mongoose connection
import mongoose from 'mongoose';

let mongoDB = "mongodb://localhost:27017/pokecentre";

mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });

let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

export async function getPokemon(params) {
    return PokemonModel.find(params)
}

