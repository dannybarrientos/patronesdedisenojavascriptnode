Object.prototype.log = function () {
    console.log((this));
}
const x = {a: 1}
x.log();


// TODO Creacion de Polify
if(!String.prototype.trim) {
    String.prototype.trim = function () {
        try {
            return this.replace(/^\s+|\s+$/g, "")
        } catch (e) {
            return this
        }
    }
}

const y = "    Aqui vamos     ".trim()
y.log();
