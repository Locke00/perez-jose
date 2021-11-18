import { useEffect } from 'react';
import { getFetch } from '../../services/getFetch'
import { useState } from "react";
import ItemList from "../ItemList";
import { useParams } from 'react-router';
import { getFirestore } from '../../services/getFirestore';




export function ItemListContainer() {
  const [animales, setAnimales] = useState(null)
  //const [animales, setAnimales] = useState([]) tb podria ser asi
  const [loading, setLoading] = useState(true)

  const {id} = useParams()

  useEffect(() => {
    const db = getFirestore()
    //const dbQuery = db.collection('items').get()    // .collection('items').get()   obtiene toda la colección
    //const dbQuery = db.collection('items').doc('5gECVndpOSaDc0bnYZt6').get()    // pasando el id de document  
    //const dbQuery = db.collection('items').where('price','>',100).get()    // con where puedo setear un criterio de seleccion
    //const dbQuery = db.collection('items').where('categoria','==','perro').get()    // filtrar x categoria, los where se pueden anidar
   
    // dbQuery
    // .then((resp)=> {  setAnimales(resp.docs.map(  (animal)=>({ id:animal.id, ...animal.data() }) ))  } )
    // .catch(err => console.log(err))
    // .finally(()=> setLoading(false));




    //.then((resp)=> {console.log(resp);})
    //.then((resp)=> setAnimales(   { id:resp.id, ...resp.data()   }  ))       // .data() me permite recuperar el obj q yo necesito
    
    if (id) {
      const dbQuery = db.collection("items").where("categoria","==",id).get()
      dbQuery
      .then((resp)=> {  setAnimales(resp.docs.map(  (animal)=>({ id:animal.id, ...animal.data() }) ))  } )
      .catch(err=> console.log(err))      
      .finally(()=>setLoading(false))
      
    } else {
      const dbQuery = db.collection('items').get()    // .collection('items').get()   obtiene toda la colección
      dbQuery
      .then((resp)=> {  setAnimales(resp.docs.map(  (animal)=>({ id:animal.id, ...animal.data() }) ))  } )
        .catch(err=> console.log(err))      
      .finally(()=>setLoading(false))
    }


    // //setLoading(true)
    // if (id) {
    //   getFetch
    //   .then((animales)=>{
    //         setAnimales(animales.filter(animal=>animal.categoria===id)  )})
    //   .catch(err=> console.log(err))      
    //   .finally(()=>setLoading(false))
    // } else {
    //   getFetch
    //   .then((animales)=>{
    //         setAnimales(animales)})
    //   .catch(err=> console.log(err))      
    //   .finally(()=>setLoading(false))
    // }
  },[id])
  console.log(animales);
  

    return(
        <span>
          { loading ? <h3>Cargando...</h3> :

            <ItemList items={animales != null ? animales : [] } />
          }

        </span>
    )
}
export default ItemListContainer