const express = require('express')
const parser = require('body-parser')
const services = require('./services')
const handlify = require('./handler')

const userHandler = handlify('users')
const postsHandler = handlify('posts')

const app = express()

// parse aplication/x-www-form-urlencoded
app.use(parser.urlencoded({extended: false }))

// parse aplication/json
app.use(parser.json())
const port = 3000

app.get('/', userHandler(services).get)
app.post('/', userHandler(services).post)
app.put('/:id', userHandler(services).put)
app.delete('/:id', userHandler(services).delete)
app.get('/posts', postsHandler(services).get)
app.post('/posts', postsHandler(services).post)
app.put('/posts/:id', postsHandler(services).put)
app.delete('/posts/:id', postsHandler(services).delete)

app.listen(port, () => console.log(`Example app listening on port ${port}`))