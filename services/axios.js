const axios = require('axios')


const instance = axios.create ({
    baseURL: 'https://jsonplaceholder.typicode.com'
})


//TODO Patron Adaptador
const adapter = {
    get: url => instance.get(url)
}
module.exports = adapter