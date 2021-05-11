let mixin = {
    saludar() {
        console.log(`Hola ${this.nombre}`);
    },
    despedir() {
        console.log(`Chao ${this.nombre}`);
    }
};

//TODO Clase
class Usuario {
    constructor(nombre) {
        this.nombre = nombre;
    }
}

//TODO Aumentamos el prototipo
//TODO se puede aumentar
Object.assign(Usuario.prototype, mixin);

const usuario = new Usuario('Lucia Feliz')
usuario.saludar()