import { useState } from 'react';

export function ItemCount({stock,initial,onAdd}) {
    const [count, setCount] = useState(Number(initial));

    function incrementarContador() {
        if (count<stock){
          setCount(count + 1);
        }
      }
  
    function decrementarContador() {
      if (count>1)  {
        setCount(count - 1);
      }
    }

    function agregarAlCarrito() {
        console.log(count)
    }
  
    return(
        <>
          <div className="row">
            <div className="col s12 m6">
                <div className="card blue-grey darken-1">
                    
                    <div className="card-action">
                        <button className="col s2 waves-effect waves-light btn" onClick={decrementarContador}>-</button>
                        <span className="col s4 waves-effect teal lighten-2 center-align">{count}</span>
                        <button className="col s2 waves-effect waves-light btn" onClick={incrementarContador}>+</button>
                    </div>
                    <br/>
                    <div><button className="btn" onClick={agregarAlCarrito}>Agregar al Carrito </button></div>  

                </div>
            </div>
        </div>


        </>
    )
}

export default ItemCount