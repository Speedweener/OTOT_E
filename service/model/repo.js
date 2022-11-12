PokemonModel = require('./pokemonModel');

//Set up mongoose connection
import mongoose from 'mongoose';

let mongoDB = "mongodb://172.20.0.1:27017/mydb";

mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });

let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

export async function getPokemon(params) {
    return PokemonModel.find(params)
}