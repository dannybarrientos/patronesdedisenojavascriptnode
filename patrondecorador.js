// TODO Patron Decorador va a tomar todas las instancias de una clase y le va ir agregando las nuevas funcionales

class Macbook {
    precio() {
        return 1000
    }
}

const memoria = mac => {
    const valorPrecio = mac.precio()
    mac.precio = function () {
        return valorPrecio + 200
    }
}


const macbook = new Macbook()

memoria(macbook)
console.log(macbook.precio());