import React from 'react'
import { useCartContext } from '../../context/CartContext'

export const Cart = () => {
    let totalPrize = 0
    const {cartList, precioTotal, borrarElCarrito} = useCartContext()
    console.log('cartList: ')
    console.log(cartList)
    return (
        <div>
            <h5> Carrito </h5>
            {  cartList.map((prod) => <li key={prod.animal.id} >Raza: {prod.animal.raza}. Cantidad: {prod.quantity} Precio: ${prod.animal.price}</li>
                
            )   }
            {`Precio total: $${precioTotal()}`}
            <br/>
            <br/>
            <button onClick = { ()=> borrarElCarrito()}>Borrar el Carrito</button>
            
        </div>
    )
}
