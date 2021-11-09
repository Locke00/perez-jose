import React from 'react'
import { useState } from "react";


const ButtonCount= ()=> {
    return <button className="btn btn-outline-primary" onClick={()=>console.log('Producto agregado')}>Agregar Al carrito</button>
}

const InputCount= ()=> {
    return <button className="btn btn-outline-primary"  onClick={()=>alert('yendo al cart')}>Terminar compra</button>
}



const Intercambiabilidad = () => {
    const [inputType, setInputType] = useState('button')

    const handleInter=()=>{
        setInputType('input')
    }


    return (
        <div>
            <label>intermcabialidad</label>
            <div>
                <ButtonCount/>
                <InputCount/>
            </div>
            <div>-----------</div>
            <div onClick={handleInter}>
            {
                inputType === 'button' ?
                    <ButtonCount /> : <InputCount />


            }
            </div>
        </div>
    )
}

export default Intercambiabilidad
