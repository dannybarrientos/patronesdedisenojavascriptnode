const modulo = {
    prop: 'mi prop',
    config: {
        lenguaje: 'es',
        cache: true,
    },
    setConfig: conf => {
        modulo.config = conf
    },
    isCacheenabled: () => {
        console.log(modulo.config.cache ? 'si' : 'no');
    }
}