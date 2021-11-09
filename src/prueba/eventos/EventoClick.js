import React from 'react'

const EventoClick = () => {
    const funcClick = (evt) => {      
        console.log('clicked');
        //al terminar esta funcion evt se destruye
    }
    return (
        <div>
            <button onClick={funcClick}>Click-me</button>
        </div>
    )
}

export default EventoClick
