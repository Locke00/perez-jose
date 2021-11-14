import { createContext,useContext } from "react";
import { useState } from 'react';

const CartContext = createContext()
export  const useCartContext = () => useContext(CartContext)


const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState([])


    function agregarAlCarrito(selectedAnimal) {
        //acá hay q agregarle logica de q no agregue repetidos, if idInCart(animal,cartList), recien haga el setCartList
        //sino q mande un alert, (q no admita duplicados)

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
            //setCartList(cartList)
            console.log('elemento ya esta en el carrito');
        } else {
            setCartList([
                ...cartList,
                selectedAnimal
            ])
        }
    }
    //item= cartList[0].amimal
    //id1=item.id
    const mostrarListado =() =>{
        console.log(cartList);
    }
    return (

        <CartContext.Provider value={{
            cartList,
            mostrarListado,
            agregarAlCarrito,
            //aqui adentro hay q inyectar mas cosas,
            //metodos recomendados pero no obligatorios:
            //addItem(item,quantity) //agregar cierta cantidad de un item al carrito
            //removeItem(itemId)    //remover un item del cart
            //clear() removte todos los items
            //isInCart: (id) => true | false, si esta en el cartList
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider

//las 2 lineas de arr es lo mismo q export const CartContext = createContext()