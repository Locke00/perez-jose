import React from 'react'
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext'
import { useState, useEffect } from "react";
import { getFirestore } from '../../services/getFirestore';
import firebase from "firebase"

function validarEmail(email1,email2){
    let emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return emailRegex.test(email1) && (email1 === email2)
}

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
    )
  }


export const Cart = () => {
    const [idOrden, setIdOrden] = useState('')
    const {cartList, precioTotal, borrarItem} = useCartContext()
    const [ordenEstado, setOrdenEstado] = useState({})
    const [formData, setFormData] = useState({})

    const generarOrden = (e) => {
        e.preventDefault()
        let orden = {}

        if(validarEmail(formData.email,formData.reemail)) {
            orden.date = firebase.firestore.Timestamp.fromDate(new Date())
            orden.buyer = formData
            orden.total = precioTotal()
            orden.items = cartList.map(cartItem=> {
                const id = cartItem.animal.id
                const raza = cartItem.animal.raza
                const precio = cartItem.animal.price * cartItem.quantity
                return {id, raza, precio}
            })

            setOrdenEstado(orden)

            //llamada al firestore
            const dbQuery = getFirestore()
            dbQuery.collection('orders').add(orden)
            .then(resp => setIdOrden(resp.id))
            .catch(err=> console.log(err))
            .finally(()=> {
              setFormData({ name : '', phone : '', email : '', reemail : ''
              })
            })
        } else {
            alert('En las casillas de mail se deben colocar mails validos, y ambos deben ser el mismo')
        }
    }

    const handleChange = (e) => {
        setFormData(
            {
                ...formData,
                [e.target.name]: e.target.value
            }
        )
    }

    return (
        <div>
            <h5> Carrito </h5>
            {  
                cartList.map((prod) => 
                    <li key={prod.animal.id} >Raza: {prod.animal.raza}. Cantidad: {prod.quantity} Precio: ${prod.animal.price} 
                        <button onClick = { ()=> borrarItem(prod.animal.id)}>Quitar del carrito</button>
                    </li>
            )}

            <FooterCart/>
            <form onSubmit={generarOrden} 
                  onChange={handleChange}>
                <input type='text' name='name' placeholder='Nombre' defaultValue=''/>
                <input type='text' name='phone' placeholder='Telefono' defaultValue=''/>
                <input type='email' name='email' placeholder='Email' defaultValue=''/>
                <input type='email' name='reemail' placeholder='Repetir Email' defaultValue=''/>
                <button>Enviar</button>
            </form>
            { idOrden &&
                <h4>
                    La compra se realizó exitosamente. <br/>
                    Codigo de orden: {idOrden} <br/> 
                    Precio: {ordenEstado.total} <br/>
                    Gracias por su compra.
                </h4>
            }

        </div>
    )
}