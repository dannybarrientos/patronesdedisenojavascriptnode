//TODO Patron Adaptador  tambien conocidos por alguno Subcribe andSubcribe oo event listener

const user = new User();
const init = () => {
    user.on('login', userLoginIn)
    user.on('login', retrieveIniData) // Se pueden agregar mas funcionalidades de acuerdo a la aplicacion

}
const userLoginIn = () => {
    //Usuario inicio session
}

app.init()

//En algun lugar de nuestra app
const login => () => {
    //Logica inicio de Session..
    //..

    //Luego
    user.triger('login')
}

login()