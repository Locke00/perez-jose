import ItemDetail from "../ItemDetail"
import { useEffect } from 'react';
import { useState } from "react";
import { useParams } from "react-router";
import { getFirestore } from '../../services/getFirestore';

export function ItemDetailContainer() {

    const {id} = useParams()
    const [animal, setAnimal] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const db = getFirestore()
        const dbQuery = db.collection("items").doc(id).get()
        dbQuery
        .then((resp)=> {  setAnimal({id: resp.id, ...resp.data()})  } )
        .catch(err=> console.log(err))      
        .finally(()=>setLoading(false))
    },[id])

    return(
        <div>
            { loading ? <h3>Cargando...</h3> :
              animal!=null ? <ItemDetail animal={animal} /> : null 
            }  
        </div>
    )
}

export default ItemDetailContainer