const express = require('express')
const parser = require('body-parser')
const services = require('./services')
const handler = require('./handler')
const app = express()

// parse aplication/x-www-form-urlencoded
app.use(parser.urlencoded({extended: false }))

// parse aplication/json
app.use(parser,json)
const port = 3000

app.get('/', handler(services).get)
app.post('/', handler(services).post)
app.put('/:id', handler(services).put)
app.delete('/:id', handler(services).delete)

app.listen(port, () => console.log(`Example app listening on port ${port}`))