// TODO Modulo revelador
// estaremos utilizando un ifin
const resultado = (()=>{
    const x = {}
    return {
        a: () => console.log(x),
        b: (key, val) => x[key] = val        
    }
})()
resultado.a()
resultado.b('queso', 'cabra')
resultado.a()
console.log(resultado.x);

// TODO Ejemplo Consumo de APi aplicando modulo revelador aqui 

const Users = (()=>{
    const recurso = 'https://jsonplaceholder.typicode.com/users'
    
    return {
        listar : async()=>{
            return await fetch(recurso).then(x =>x.json())
        },
        crear: async(data) => {
            return await fetch (recurso, { type: 'POST', doby: JSON.stringify(data) }).then(x =>x.json())
        }
    }
})()