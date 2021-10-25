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
          <div> Ovejero Aleman </div>
          <button onClick={incrementarContador}>+</button>
          <span>{count}</span>
          <button onClick={decrementarContador}>-</button>
          <div><button onClick={agregarAlCarrito}>Agregar al Carrito </button></div>  
        </>
    )
}
export default ItemCount