import { useState } from 'react';
import { useCartContext } from "../context/CartContext";
import ItemCount from "./ItemCount"

export function ItemDetail({animal}) {
    const [quantity, setQuantity] = useState(1) 
    const {agregarAlCarrito} = useCartContext()

    const onAdd = (cantidad)=>{
        setQuantity(cantidad)
        agregarAlCarrito({animal,quantity: cantidad})
    }
    
    return(
        <>
            <div className="row">
                <div className="col s12 m6">
                    <div className="card blue-grey darken-1">
                        <div className="card-content white-text">
                            <p>Detalles del Item</p>    
                            <span className="card-title">{animal.raza}</span>
                            <figure className="img">
                                <img src={`../assets/img/${animal.pictureURL}`} alt={animal.raza} />
                            </figure>
                            <p>Precio: ${animal.price}</p>
                            <p>{animal.description}</p>
                        </div>
                        <ItemCount stock="5" initial={quantity} onAdd={onAdd}/>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ItemDetail