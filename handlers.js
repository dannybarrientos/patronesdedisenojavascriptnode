module.exports.get = ({axios}) => async(req, res) =>{
    const { data } = await axios.get('https:jsonplaceholder.typicode.com/users')
    res.send(data)
}

module.exports.post = (axios, db,storage,auth) => async(req, res) =>{
    const { data } = await axios.get('https:jsonplaceholder.typicode.com/users')
    res.send(data)
}