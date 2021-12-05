import { useEffect } from "react"
import { useState } from 'react';
import { useCartContext } from "../context/CartContext";


import EventoClick from "../prueba/eventos/EventoClick"
import Input from "../prueba/eventos/Input"
import Intercambiabilidad from "../prueba/eventos/Intercambiabilidad"
import PreventEvent from "../prueba/eventos/PreventEvent"

import AppEcommerce from "../prueba/rendering/AppEcommerce"


import ItemCount from "./ItemCount"


export function ItemDetail({animal}) {
    const [quantity, setQuantity] = useState(1) 

    const {cartList,mostrarListado,agregarAlCarrito} = useCartContext()
    //console.log(cartList)
    //console.log(mostrarListado);
    //console.log(mostrarListado);


    const onAdd = (cantidad)=>{
        setQuantity(cantidad)
        console.log("Animal elegido: "+animal.id)
        //console.log("Cantidad Agregada al carrito: "+cantidad) hay q hacer un condicional en caso q agregar al carrito
        //no tenga exito xq ya estaba en el carrito, q no muestre el console.log de lo agregado
        agregarAlCarrito({animal,quantity: cantidad})
    }
    console.log(cartList);
    
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
                            {/*<img src={`../assets/img/ovejero-aleman.jpg`} alt={animal.raza} />*/}
                        </figure>

                        <p >Precio: ${animal.price}</p>
                        <p>{animal.description}</p>
                        
                        </div>
                        <ItemCount stock="5" initial={quantity} onAdd={onAdd}/>
                    
                    </div>
                </div>
            </div>
            {/*-- Eventos -- */}
            {/*<Input />*/}
            {/*<EventoClick />*/}
            {/*<PreventEvent />*/}
            {/*<Intercambiabilidad />*/}
            {/*<PreventEvent />*/}

            {/*-- rendering condicional -- */}
            {/*<AppEcommerce> */}
            {/*</AppEcommerce> */}



        </>
    )
}
export default ItemDetail