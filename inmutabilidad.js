//TODO la mutabilidad hacer referencia cuando un objeto puede cambiar estructuras propiedades o metodos,
// En cuanto a la inmutabilidad no le cambia el objeto no se puede agregar o quitar metodos, siempre se mantiene asi

const objt = {
     a:1
}

const obj2 = {
    ...objt,
    c:3
}

console.log(objt,obj2)