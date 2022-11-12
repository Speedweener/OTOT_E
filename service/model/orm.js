getPokemon = require('./repo.js');


export async function getAllPokemon() {
    return await getPokemon({})
}