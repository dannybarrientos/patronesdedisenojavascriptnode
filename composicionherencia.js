//TODO no son patrones 
//Me permite trabajar con pequeñas funciones y que esta no depende de una clase

/*class Persona {
    constructor () {
        this.nombre = 'lala'        
    }

    saludar() {
        console.log(`Hola! soy ${this.name}`);
    }
}

classe Perro extends Persona {

}*/



//TODO una manera de reemplazar esto una funcion que ya esta definida y en otro objeto es llamada
/*
const persona = {
    nombre: 'lala',
    saludar: function () {saludar(this.nombre)}
}
*/
//TODO con una clase

const saludar = name => console.log(`Hola! soy ${name}`)
const despedir = () => console.log(`Adios! `)
const dormir = () => console.log(`zzzzzzzz `)
class Persona {
    constructor () {
        this.nombre = 'lala'
    }

    saludar(){saludar(this.nombre)}
    despedir(){despedir()}
    dormir(){dormir()}
}

class robot {
    constructor () {
        this.nombre = 'lala'
    }

    saludar(){ saludar(this.nombre) }
    despedir(){ despedir() }    

}