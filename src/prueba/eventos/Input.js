import React from 'react'


/*
    cada vez q presione una tecla en el input va disparar el inputHandler pasandole como parametro
    el evento q disparo el evento, x medio del cual puedo saber q es lo q pasó, q tecla se
    presionó, etc
*/
const Input = () => {
    console.log('soy el input');

    const inputHandler = (event) =>{
        console.log(event.key);                     //event: devuelve el evento
    }                                               //event.key: devuelve la tecla presionada
                                                    //event.nativeEvent: devuelve el evento nativo
    return (
        <div className="box" >
            <div className="border border-3 border-primary">
                <input className="m-5" onKeyDown={inputHandler} type="text" name="i" id="i"/>
            </div>
        </div>
    )
}

export default Input
