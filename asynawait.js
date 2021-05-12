//TODO Promesa para resolvers las peticiones de los callback

/*
//Colback Heell o Piramide de la muerte
const fn = () =>{
    
    ajax( () => {
        ajax(()=>{
            ajax(()=>{

            })
        })
    })
}
*/

//COn promesas donde se ve la necesidad de utilizar el asyn y await ya que aqui no me permite reutilizar las variables ya que estan por fuera del alcance
/*const fn1() => {
    ajax()
    .then(() =>{
        const a = 1
        return ajax()
    })
    .then(() =>{
        return ajax()
    })
    .then(() =>{
        return ajax()
    })
    .then(() =>{
        console.log(a);
        return ajax()
    })
}*/


const fn = async => {
    const resultado = await ajax()
    const resultado1 = await ajax()
    const resultado2 = await ajax()
    const resultado3 = await ajax()
    const resultado4 = await ajax()
    const resultado5 = await ajax()
}