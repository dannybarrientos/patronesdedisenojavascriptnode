const Emitter = require('events')

const emitter = new Emitter()

emitter.on('ObjetoId', x => console.log(x))

emitter.emit('ObjetoId', { ObjetoId:'DatosdeOjetos'})

