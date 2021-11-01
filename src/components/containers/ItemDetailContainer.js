import ItemDetail from "../ItemDetail"
import { useEffect } from 'react';
import { useState } from "react";
import { getItem } from "../../services/getFetch";


export function ItemDetailContainer({id}) {
    const [animal, setAnimal] = useState(null)
    /*const getItem = new Promise((resolve,reject)=>{
        setInterval(() => {
            
        }, 2000);

    })*/

    useEffect(() => {
        getItem(id)
        .then((animal)=>{
              setAnimal(animal)})
        //.finally(()=>setLoading(false))
        
      },[])
      


    return(
        <>
            {/*<h3>Item Detail Container</h3>*/}
            { animal!=null ? <ItemDetail animal={animal} /> : null }
            
            
        </>
    )
}

//{ animal!=null ? <ItemDetail animal={animal != null ? animal : {} } /> : null }
export default ItemDetailContainer