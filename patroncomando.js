const Commander = (() => {
    const obj = {
        comprar: x => {
            console.log(`Comprando ${x}`)
        },
        vender: x => {
            console.log(`Vendiendo ${x}`)
        }
    }

    return {
        run: (comando, argumentos) => {
            console.log('Esto llego', obj[comando]);
            if(!obj[comando]) {
                console.log('Comando no Existe')
                
                console.log('Esto esta llegando', obj[comando]);
                return
            }
            console.log(obj[comando]);
            obj[comando](argumentos)
        }
    }
})()

Commander.run('comprar', 'Mazda')
Commander.run('lala', 'No pasa Nada!')
Commander.run('vender', 'Curso UDEMy')