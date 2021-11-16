import React from 'react'
import { useCartContext } from '../../context/CartContext'

export const Cart = () => {
    let totalPrize = 0
    const {cartList} = useCartContext()
    console.log('cartList: ')
    console.log(cartList)
    return (
        <div>
            <h1> Cart</h1>
            {  cartList.map((prod) => <li>Raza: {prod.animal.raza} .Cantidad: {prod.quantity} Precio: ${prod.animal.price}</li>
                
            )   }
        </div>
    )
}
