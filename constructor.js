class MiClase {
    constructor(p1,p2) {
        this.propiedad = p1
        this.propiedad2 = p2       
    }
    metodo ()  {
        //Soy un metodo de prototipo
    }
}

const instancia = new MiClase(4,3)
console.log(instancia.__proto__)