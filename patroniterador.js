//TODO Mediante una funcion objeto o clase, se puede acceder a dos objecto de metodos next y value

function* iterador(col) {
    var nextIndex = 0;

    while (nextIndex < col.length) {
        yield col[nextIndex++];
    }
}

const x = [1,2,3,4,5,6,7]
const gen = iterador(x)
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());


