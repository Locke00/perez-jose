import ItemDetail from "../ItemDetail"
import { useEffect } from 'react';
import { useState } from "react";
import { getItem } from "../../services/getFetch";
import { useParams } from "react-router";
import { getFirestore } from '../../services/getFirestore';


export function ItemDetailContainer() {

    const {id} = useParams()
    const [animal, setAnimal] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        //console.log(id);
        // getItem(id)
        // .then((animal)=>{
        //       console.log('dentro del effect'+animal)
        //       setAnimal(animal)})
        // .finally(()=>setLoading(false))      

        const db = getFirestore()
        const dbQuery = db.collection("items").doc(id).get()
        dbQuery
        .then((resp)=> {  setAnimal({id: resp.id, ...resp.data()})  } )
        .catch(err=> console.log(err))      
        .finally(()=>setLoading(false))
    

        
      },[id])
      


    return(
        <div 
          //onClick={   (evt)=>{console.log('soy un evento de app')}}
          >
            {/*console.log("animal:"+animal)*/}
            { loading ? <h3>Cargando...</h3> :
              animal!=null ? <ItemDetail animal={animal} /> : null 
            }  

            
            
        </div>
    )
}

//{ animal!=null ? <ItemDetail animal={animal != null ? animal : {} } /> : null }
export default ItemDetailContainer