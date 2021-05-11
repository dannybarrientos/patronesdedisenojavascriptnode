//TODO Funcionan con igual pero con diferencia que saca y entrega a otro evento
const Emitter = (() => {
    const topics = {}
    const hOP = topics.hasOwnProperty

        return {
        on: (topic, listener) => {
             if(!hOP.call(topics, topic)) topics[topic]= []
                topics[topic].push(listener)
                console.log(topic);
        },
        emit: (topic,info) => {
            if(!hOP.call(topics, topic)) return
            topics[topic].forEach(item =>
                item(info != undefined ? info : {}))
        }
    }
})()

Emitter.on('aquis', x =>console.log(x))
Emitter.emit('aquis',{ aqui: 'Sis'})