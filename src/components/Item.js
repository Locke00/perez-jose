
export function Item({item}) {

    return(
        <>
{/*        <p>Codigo: {item.id} </p>
        <p>Raza: {item.raza} </p>
        <p>Precio: {item.price} </p>
        <p>Description: {item.description} </p>
    */}


        <div className="row">
            <div className="col s12 m6">
                <div className="card blue-grey darken-1">
                    <div className="card-content white-text">
                       <p>Codigo: {item.id}</p>
                       <span className="card-title">{item.raza}</span>
                       <p>{item.description}</p>
                       <div><button className="btn">Ver mas Información </button></div>  
                    </div>
                   
                </div>
            </div>
        </div>


        </>



    )
}
export default Item