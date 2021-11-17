import React from 'react'
import { useCartContext } from '../../context/CartContext'

export const Cart = () => {
    const {cartList, precioTotal, borrarElCarrito, borrarItem} = useCartContext()
    console.log('cartList: ')
    console.log(cartList)
    return (
        <div>
            <h5> Carrito </h5>
            {  cartList.map((prod) => <>
                    <li key={prod.animal.id} >Raza: {prod.animal.raza}. Cantidad: {prod.quantity} Precio: ${prod.animal.price} 
                        <button onClick = { ()=> borrarItem(prod.animal.id)}>Quitar del carrito</button>
                    </li>
                </>
            )}
            <h5>{`Precio total: $${precioTotal()}`}</h5>
            <br/>
            <button onClick = { ()=> borrarElCarrito()}>Borrar todo el Carrito</button>
            
        </div>
    )
}
