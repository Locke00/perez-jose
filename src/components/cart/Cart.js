import React from 'react'
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext'


function FooterCart() {
    const {obtenerQuantityTotal,precioTotal,borrarElCarrito} = useCartContext()
    return (
      <>
        {(obtenerQuantityTotal()>0) &&                
                <>
                    <span>
                        <h5>{`Precio total: $${precioTotal()}`}</h5>
                        <br/>
                        <button onClick = { ()=> borrarElCarrito()}>Borrar todo el Carrito</button>
                    </span>
                </>    
        }

        {(obtenerQuantityTotal()===0) &&                
                <>
                    <span>
                        <h5>El carrito esta vacio</h5>
                        <Link to="/">Explorar Mascotas para comprar</Link>
                    </span>
                </>    
        }


      </>
    );
  }


export const Cart = () => {
    const {cartList, precioTotal, borrarElCarrito, borrarItem, obtenerQuantityTotal} = useCartContext()
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
            { 
                console.log('Cantidad total: '+obtenerQuantityTotal())
                
                
                /*(obtenerQuantityTotal()>0 
                &&
                    <span>
                        <h5>{`Precio total: $${precioTotal()}`}</h5>
                        <br/>
                        <button onClick = { ()=> borrarElCarrito()}>Borrar todo el Carrito</button>
                    </span>
                )
                    <span>
                        No hay elementos en el carrito
                    </span>
                */
                    
              
            }
            <FooterCart/>
        </div>
    )
}



//{loading ? <h2>Loading... </h2> : <h3>Productos cargardos!</h3>}