// contactController.js
// Import contact model

import Redis from 'redis';

const redisClient = Redis.createClient()
await redisClient.connect()
import {ormGetPokemon} from './model/orm.js';

export async function getAllPokemon(req, res) {
    try {
        console.log("START");

        let dataJson = {}
        let data = await redisClient.get('data')
        
        if (data === null) {
            console.log("NULL");

            dataJson = await ormGetPokemon();
            await redisClient.setEx('data', 10, JSON.stringify(dataJson))
        } else {
            dataJson = JSON.parse(data)
        }
        console.log("END");


        return res.status(200).json({message: `Got all pokemon!`, data: dataJson});
    } catch (err) {
        return res.status(500).json({message: 'Server error!'})
    }
}
