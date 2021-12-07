import { createContext,useContext } from "react";
import { useState } from 'react';

const CartContext = createContext()
export  const useCartContext = () => useContext(CartContext)

const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState([])

    function agregarAlCarrito(selectedAnimal) {
        const findItem = cartList.find((item)=>item.animal.id===selectedAnimal.animal.id)
        if (findItem){
            console.log(findItem)
            findItem.quantity = findItem.quantity+selectedAnimal.quantity
            console.log('cantidad total:'+ findItem.quantity)
            setCartList([
                ...cartList.filter((item)=>{
                    return (item.animal.id !== findItem.animal.id)?true:false
                }),
                findItem
            ])
        } else {
            setCartList([
                ...cartList,
                selectedAnimal
            ])
        }
    }

    const precioTotal =()=> {
        return cartList.reduce((acum, prod)=> acum + (prod.quantity * prod.animal.price) , 0)  
    }

    const mostrarListado = () =>{
        console.log(cartList);
    }

    const borrarItem = (id) => {
        setCartList(cartList.filter(prod => prod.animal.id !== id  ))
    }

    const obtenerQuantityTotal = () => {
        return cartList.reduce((acum, prod)=> acum + prod.quantity , 0)
    }

    const borrarElCarrito = () =>{
        setCartList([])
    }

    return (
        <CartContext.Provider value={{
            cartList,
            mostrarListado,
            agregarAlCarrito,
            precioTotal,
            borrarItem,
            borrarElCarrito,
            obtenerQuantityTotal
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider