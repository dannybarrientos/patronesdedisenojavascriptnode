const compose =(...fns) => x =>fns.reduceRight((y,f)=> f(y),x)
const head = xs =xs[0]
const formateo = x => ({
         nombreCompleto: `${x.nombre} ${x.apellido}`,
        edad: x.edad,
})

const formato = x => {`${x.nombreCompleto} tiene ${x.edad} año(s)`}

const filter = f=> xs => xs.filter(f)