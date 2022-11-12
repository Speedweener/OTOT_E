import { getPokemon }  from "./repo.js"; 


export async function ormGetPokemon() {
    return await getPokemon({})
}

