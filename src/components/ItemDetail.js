import { useEffect } from "react"
import { useState } from 'react';

import EventoClick from "../prueba/eventos/EventoClick"
import Input from "../prueba/eventos/Input"
import Intercambiabilidad from "../prueba/eventos/Intercambiabilidad"
import PreventEvent from "../prueba/eventos/PreventEvent"

import ItemCount from "./ItemCount"


export function ItemDetail({animal}) {
    const [quantity, setQuantity] = useState(1) 

    const onAdd = (cantidad)=>{
        setQuantity(cantidad)
        console.log("Cantidad Agregada al carrito: "+cantidad)
    }
  

    
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
                        <ItemCount stock="5" initial={quantity} onAdd={onAdd}/>
                    
                    </div>
                </div>
            </div>
            {/*<Input />*/}
            {/*<EventoClick />*/}
            {/*<PreventEvent />*/}
            {/*<Intercambiabilidad />*/}
            {/*<PreventEvent />*/}

        </>
    )
}
export default ItemDetail