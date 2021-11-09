import React from 'react'

const PreventEvent = () => {
    const onInput = (evt) => {
        evt.preventDefault();   //evita q se produzca el comportamiento x defecto, q es q se muestre la tecla presionada en el input
        console.log(evt.key);   //en su lugar, estoy imprimiendo x consola la tecla presionada
    }

    return (
        <div>
            <label>
                <input onKeyDown={onInput}></input>
            </label>
        </div>
    )
}

export default PreventEvent
