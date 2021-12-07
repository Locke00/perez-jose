import { useEffect } from 'react';
import { useState } from "react";
import ItemList from "../ItemList";
import { useParams } from 'react-router';
import { getFirestore } from '../../services/getFirestore';

export function ItemListContainer() {
  const [animales, setAnimales] = useState(null)
  const [loading, setLoading] = useState(true)
  const {id} = useParams()

  useEffect(() => {
    const db = getFirestore()
    
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

  },[id])

    return(
        <span>
          { loading ? <h3>Cargando...</h3> :

            <ItemList items={animales != null ? animales : [] } />
          }
        </span>
    )
}
export default ItemListContainer