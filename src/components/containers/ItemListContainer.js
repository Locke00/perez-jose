import { useEffect } from 'react';
import { getFetch } from '../../services/getFetch'
import { useState } from "react";
import ItemList from "../ItemList";
import { useParams } from 'react-router';




export function ItemListContainer() {
  const [animales, setAnimales] = useState(null)
  //const [animales, setAnimales] = useState([]) tb podria ser asi
  const [loading, setLoading] = useState(true)

  const {id} = useParams()

  useEffect(() => {
    //setLoading(true)
    if (id) {
      getFetch
      .then((animales)=>{
            setAnimales(animales.filter(animal=>animal.categoria===id)  )})
      .catch(err=> console.log(err))      
      .finally(()=>setLoading(false))
    } else {
      getFetch
      .then((animales)=>{
            setAnimales(animales)})
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