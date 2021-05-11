//TODO Cuando queremos actualizar una api legacy con una nueva
class Api {
    constructor(){
        this.operations = function(url, opts,verb){
            switch (verb) {
                case 'get':
                    //return fecth..
                case 'post':
                    //retur fecth..
                default:
                  return
            }
        };
    }
}

class Api2{
    constructor(){
        this.get = function (url, opts){
            //return axios.get..
        };
        this.post = function (url, opts){
            //return axios.post..
        };
    }
}

//Aplicando Patron adaptador
class adaptador {
    constructor(){
        const api2 = new Api2();
        this.operations = function(url, opts,verb){
            switch (verb) {
                case 'get':
                    return api2.get(url, opts)
                case 'post':
                    return api2.post(url, opts)
                default:
                  return
            }
        };
    }
}
const api = new Api()
api.operations('www.google.co',{q:1})

const adapter = new ApiAdapter()
adapter.operations('www.google.co',{q: 1 })