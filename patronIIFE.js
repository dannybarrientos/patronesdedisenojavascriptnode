//TODO Patron IIFE Inmediate Invoked Function Expresion
// Me sirve para ayudar al patron modulo revelador 

//IIFE

const resultado = (() => {
    const x = 'Hola'
    console.log(x);
})()
console.log(x);


//La manera mas facil de escribir un iife es 
const resul = (() => {
    
})()