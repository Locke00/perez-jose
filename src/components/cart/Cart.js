import React from 'react'
import { useCartContext } from '../../context/CartContext'

export const Cart = () => {
    let totalPrize = 0
    const {cartList, precioTotal} = useCartContext()
    console.log('cartList: ')
    console.log(cartList)
    return (
        <div>
            <h1> Cart</h1>
            {  cartList.map((prod) => <li key={prod.animal.id} >Raza: {prod.animal.raza}. Cantidad: {prod.quantity} Precio: ${prod.animal.price}</li>
                
            )   }
            {`Precio total: $${precioTotal()}`}
            {console.log(precioTotal())}
        </div>
    )
}
