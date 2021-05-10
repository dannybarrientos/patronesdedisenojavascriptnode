// TODO Alcancce lexico
// Todo Alcance Privado

/*const y = ' lelee'
const f = () => {
    const x = 'lala'
    return () => {
        const z = 'llololo'
        console.log(x,y,z);
    }
    
}*/

/*const f = (x) => {
    
    return () => {
        
        console.log(`Rayos ${x} !`);
    }
    
}
f('Danny')()*/

//TODO Cuando se trabaja con mongo

const auditProps = {
    createAd:  { defaul: new Date},
    updateAt:  { defaul : newDate},
    createdBy: { type: Schema.Types.ObjectId, ref: 'User'},
    updateBy:  { type: Schema.Types.ObjectId, ref: 'User'}
}
const Model = defaultProps => {
    return (name, props) =>{
        const schema = moongose.schema({
            ...defaultProps,
            ...props,
        })
        return mongos.model (name, schema);
    }
}

export const withAudit = Model(auditProps)

//TODO Conexio bases de datos 
///en ..otro archivo
withAudit('Produc',{
    name: String,
    desc: String
})