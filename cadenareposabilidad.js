class Suma {
    constructor (v = 0) {
        this.val = v
    }

    suma(v) {
        this.val += v
        return this;
    }
}

const valor = new Suma();
console.log(valor
.suma(2)
.suma(3)
.suma(4)
.suma(1).val)