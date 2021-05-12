const express = require('express')
const services = require('./services')
const handler = require('./handler')
const app = express()
const port = 3000

app.get('/', handler(services).get)

app.listen(port, () => console.log(`Example app listening on port ${port}`))