// contactController.js
// Import contact model
Redis = require('redis')
Pokemon = require('./pokemonModel');

const redisClient = Redis.createClient()
await redisClient.connect()

export async function getAllPokemon(req, res) {
    try {
        let dataJson = {}
        let data = await redisClient.get('data')
        
        if (data === null) {
            dataJson = await getAllPokemon();
            await redisClient.setEx('data', 600, JSON.stringify(dataJson))
        } else {
            dataJson = JSON.parse(data)
        }
        
        return res.status(200).json({message: `ot all pokemon!`, data: dataJson});
    } catch (err) {
        return res.status(500).json({message: 'Server error!'})
    }
}