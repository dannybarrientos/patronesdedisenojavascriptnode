//TODO Ejemplo1 Composicion

/*
const suma = a=> b => a+b;
const suma1 = suma(2);
suma1(5)
console.log(suma1(9));
*/

//TODO Ejemplo 2 Composicion de como hacerlo y le haremos refactor

/*
const users = [
    { edad: 17, nombre: 'Nicolas', apellido: 'Soto'},
    { edad: 18, nombre: 'Chachito', apellido: 'Feliz'},
    { edad: 12, nombre: 'Loreto', apellido: 'Fernandez'},
    { edad: 1, nombre: 'Lucia', apellido: 'Barrientos'}
]

const traePrimerInfante = data => {
    const infante = data.filter(x=>x.edad < 2)
    const traePrimerInfante = infante[0]
    const infante = {
        nombreCompleto: `${primerInfante.nombre} ${primerInfante.apellido}`,
        edad: primerInfante.edad
    }
    return `${infante.nombreCompleto} tiene ${infate.edad} año(s)`
}
*/
// TODO Realizando el refactor dividi y venceras
const users = [
    { edad: 17, nombre: 'Nicolas', apellido: 'Soto'},
    { edad: 18, nombre: 'Chachito', apellido: 'Feliz'},
    { edad: 12, nombre: 'Loreto', apellido: 'Fernandez'},
    { edad: 1, nombre: 'Lucia', apellido: 'Barrientos'}
]

const compose =(...fns) => x =>fns.reduceRight((y,f)=> f(y),x)

const head = xs =xs[0]

const formateo = x => ({
         nombreCompleto: `${x.nombre} ${x.apellido}`,
        edad: x.edad,
})

const formato = x => {
    `${x.nombreCompleto} tiene ${x.edad} año(s)`
}


// TODO Esta es una composicion de funciones
const traePrimerInfante = data =>  formato(formateo(head(data.filter(x=>x.edad < 2))));






//TODO Ejemplo Composicion
/*
f(g(x))
const a = g(x)
const r =f(a)*/