import ItemCount from "../ItemCount"
import { useEffect } from 'react';
import { getFetch } from '../../services/getFetch'
import { useState } from "react";
import ItemList from "../ItemList";


export function ItemListContainer({mensaje}) {
  const [animales, setAnimales] = useState(null)
  //const [animales, setAnimales] = useState([]) tb podria ser asi
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getFetch
    .then((animales)=>{
          setAnimales(animales)})
    .finally(()=>setLoading(false))
    
  },[])


    return(
        <span>
          { loading ? <h1>Cargando</h1> :

            <ItemList items={animales != null ? animales : [] } />
          }

          <label>
            {mensaje}
          </label>
          {/*<ItemCount stock="5" initial="1" />*/}

        </span>
    )
}
export default ItemListContainer