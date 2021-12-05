import React from 'react'
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext'
import { useState, useEffect } from "react";
import { getFirestore } from '../../services/getFirestore';
import firebase from "firebase"
//import 'firebase/firestore'

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
    );
  }


export const Cart = () => {
    const [idOrden, setIdOrden] = useState('')
    const {cartList, precioTotal, borrarElCarrito, borrarItem, obtenerQuantityTotal} = useCartContext()

    const [formData, setFormData] = useState({
        name : 'jose',
        phone : '121212',
        email : 'a@a.com',
        reemail : 'a@a.com'
    })

    /*
    const [formData, setFormData] = useState({
        name : '',
        phone : '',
        email : '',
        reemail : ''
    })
*/
/*    const orden = {
        buyer : {
            name : 'jose perez',
            phone : '381123123',
            email : 'a@a.com'
        },
        items : [
            {
                id : '432523',
                raza : 'Obejero Aleman',
                price : 340
            }
        ],
        total : 0
    }
*/

    console.log('cartList: ')
    console.log(cartList)
  //  console.log(orden)

    const generarOrden = (e) => {
        e.preventDefault()
        let orden = {}      //genera un objeto vacio

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

            //llamada al firestore
            
            const dbQuery = getFirestore()
            //add tiene la versatilidad de q si la coleccion no existe la crea
            dbQuery.collection('orders').add(orden)
            .then(resp =>  setIdOrden(resp.id))
            .catch(err=> console.log(err))
            .finally(()=> setFormData({
                name : 'jose',
                phone : '121212',
                email : 'a@a.com',
                reemail : 'a@a.com'
            }))
            alert('La compra se realizó exitosamente. \n Codigo de orden: '+idOrden.id+'\nPrecio: $'+orden.total+'\nGracias por su compra.')
            
        } else {
            alert('En las casillas de mail se deben colocar mails validos, y ambos deben ser el mismo')
        }

        //aqui tengo q agregar dsp el catch y el finally a la promise
        /** Habria q agregarle, tipo
           .add(orden).then(..)        
           .catch(err => { setError(err)} )
           .finally(()=>{setLoading(false)})            
         */
        
        //tb hay un .add alternativo q me permite pasarme el id q le quiero poner al nuevo doc

        //esta es la resp q me debe devolver:
        /*    t {firestore: t, _delegate: t, _userDataWriter: n}
            firestore: t {_delegate: n, Zc: t, INTERNAL: {…}, tu: FirebaseAppImpl}
            _delegate: t {converter: null, _key: t, type: "document", firestore: n}
            _userDataWriter: n {firestore: t}
            id: "Wy3wuU0Sk3LNoQPykrUV"
            parent: (...)
            path: (...)
            __proto__: Object
        como la transacción fué exitosa, nos devuelve el id del elemento generado
        si no hubiera devuelto un id, es q no se creó exitosamente el elemento    
        */
 
        /*
        //modificacion de un item:
        const dbQuery = getFirestore()
        dbQuery.collection('items').doc('5gECVndpOSaDc0bnYZt6').update({
            price: 220
        })
        .then(resp=>console.log('precio modificado'))
        //de esta forma tb puedo ir modificando el stock de cada elemento
        */

        //actualizar todolos los items q estan en el listado del cart

        /*
        esto tb tengo q ver si implementar el control del stock x item
        const itemsToUpdate = dbQuery.collection('Items').where(
            firebase.firestore.FieldPath.documentId(), 'in', cartList.map(i=>i.item.id)
        )

        const batch = dbQuery.batch()
        */    
        /*
        //esto lo tengo q hacer si decido implementar el control de stock x item
        //por cada item, restar del stock la cantidad en el carrito
        itemsToUpdate.get()
        .then( collection=>{
            collection.docs.forEach(docSnapshot => {
                batch.update(docSnapshot.ref, {
                    stock: docSnapshot.data().stock - cartList.find(item => item.id === docSnapshot.id).quantity
                })      //aqui falta gestionar el stock en cada item
            })
    
            batch.commit().then(res =>{
                console.log('resultado batch:', res)
            })
        })
        */

        //console.log(orden);
    }

    const handleChange = (e) => {
        setFormData(
            {
                ...formData,
                [e.target.name]: e.target.value
            }
        )
    }
    console.log(formData);






    return (
        <div>
            <h5> Carrito </h5>
            {  cartList.map((prod) => <>
                    <li key={prod.animal.id} >Raza: {prod.animal.raza}. Cantidad: {prod.quantity} Precio: ${prod.animal.price} 
                        <button onClick = { ()=> borrarItem(prod.animal.id)}>Quitar del carrito</button>
                    </li>
                </>
            )}
            {  console.log('Cantidad total: '+obtenerQuantityTotal())          }

            <FooterCart/>
            <form onSubmit={generarOrden} 
                  onChange={handleChange}
            
            >
                <input type='text' name='name' placeholder='Nombre' defaultValue='' value={formData.name}/>
                <input type='text' name='phone' placeholder='Telefono' defaultValue='' value={formData.phone}/>
                <input type='email' name='email' placeholder='Email' defaultValue='' value={formData.email}/>
                <input type='email' name='reemail' placeholder='Repetir Email' defaultValue='' value={formData.reemail}/>
                <button>Enviar</button>
            </form>


        </div>
    )
}



//{loading ? <h2>Loading... </h2> : <h3>Productos cargardos!</h3>}