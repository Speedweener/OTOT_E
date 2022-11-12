let express = require('express')


let app = express();


const { getAllPokemon } = require('./Controller');

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())
app.options('*', cors())

const port = 8000

app.get('/', (_, res) => res.send('Hello World'))

app.get('/all', getAllPokemon)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})