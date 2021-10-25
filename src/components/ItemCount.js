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
                    <div className="card-content white-text">
                       <span className="card-title">Ovejero Aleman</span>
                       <p>Perros muy cariñosos que saben defender el hogar.</p>
                    </div>
                    
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
//<a class="waves-effect waves-light btn"><i class="material-icons left">cloud</i>button</a>
//<button onClick={incrementarContador}>+</button>
//<button onClick={decrementarContador}>-</button>
/*
          <div> Ovejero Aleman </div>
          <button className="waves-effect waves-light btn" onClick={incrementarContador}>+</button>
          <span className="card-panel teal lighten-2">{count}</span>
          <button className="waves-effect waves-light btn" onClick={decrementarContador}>+</button>
          <br/>
          <div><button onClick={agregarAlCarrito}>Agregar al Carrito </button></div>  
*/ 
export default ItemCount