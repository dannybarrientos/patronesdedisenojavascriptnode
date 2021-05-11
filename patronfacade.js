const https = require('https');


//TODO Definir un constante de GEt con la Url y la implementacion de promesa asyn y await

const get = url => new Promise((resolve, reject) => {
    const comp = url.split('/');
    const host = comp.shift();
    const options = {
        hostname: host,
        path: `/${comp.join('/')}`,
        method: 'GET'
    };
   
    const req = https.request(options, res =>{
        res.setEncoding('utf8')
        let body = ''
        res.on('data', d => {
            body += d
        });
    
        res.on('end', d => {
            const parsed = JSON.parse(body)
            resolve(parsed);
        });
    });
    
    req.on('error', (e) => {
        reject(e);
    });
    
    req.end();
})

//get('jsonplaceholder.typicode.com/users')


const main  = async () => {
    const resultado = await get('jsonplaceholder.typicode.com/users')
    console.log('resultado APi', resultado);
}

main()