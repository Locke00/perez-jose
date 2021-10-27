

const MapTest = () =>{
    let nombres = [
        {id:1, nombre:"Jose"},
        {id:2, nombre:"Hernan"},
        {id:3, nombre:"Franco"}
    ]
    return(
        <>
            {nombres.map(
                (Persona)=>{
                return <span key={Persona.id}>{Persona.nombre}</span>
                }
            )}

        </>
    )
}
export default MapTest