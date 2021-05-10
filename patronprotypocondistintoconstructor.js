const perro = {
    raza: 'Kilterrier',
    ladrar: function () {
        console.log(`Gua!, soy un ${this.raza}`);
    }
}

const kiltro = Object.create(perro)
kiltro.ladrar()
kiltro.raza= 'Super Perro'
kiltro.ladrar()
