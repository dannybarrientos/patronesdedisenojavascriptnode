//TODO Patron Inyection de dependencia se basa en entregarle el control de los metodos que se va aejecutar a una libreria
// Eliminar todos los requiere

const express = require('express')
const axios = require('axios')
const { get } = require('./handlers')
const app = express()
const port = 3000

app.get('/',get(axios))

//TODO Esto es lo mismo que esta arriba  app.get('/',get(axios)) ===== app.get('/',(req,res) => get(axios)(req, res))


app.listen(port, () => console.log(`Example app listenig on port ${port}!`))