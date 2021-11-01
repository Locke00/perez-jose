import ItemCount from "./ItemCount"

export function ItemDetail({animal}) {
    return(
        <>
            <div className="row">
                <div className="col s12 m6">
                    <div className="card blue-grey darken-1">
                        <div className="card-content white-text">
                        <p>Detalles del Item</p>    
                        <span className="card-title">{animal.raza}</span>
                        <p >Precio: ${animal.price}</p>
                        <p>{animal.description}</p>
                        
                        </div>
                        <ItemCount stock="5" initial="1" />
                    
                    </div>
                </div>
            </div>

        </>
    )
}
export default ItemDetail