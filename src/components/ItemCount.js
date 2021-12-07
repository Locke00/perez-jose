import { useState } from 'react';
import {Link} from "react-router-dom";

export function ItemCount({stock,initial,onAdd}) {
  const [count, setCount] = useState(initial);
  const [inputType, setInputType] = useState("input");

  const handleInput = () => {
    setInputType("buy");
  }

  const ButtonCount= ({count,onAdd})=> {
    return <button className="btn btn-outline-primary" onClick={()=>{
        onAdd(count)
        handleInput()
      }
    }>Agregar Al carrito</button>
  }
  
  const InputCount= ()=> {
      return <Link to="/cart" className="btn btn-outline-primary">Terminar compra</Link>
  }
  
  function incrementarContador() {
    if (count<stock){
      setCount(count + 1)
    }
  }

  function decrementarContador() {
    if (count>1)  {
      setCount(count - 1)
    }
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
                <div>{inputType==='input' ? <ButtonCount count={count} onAdd={onAdd}/> : <InputCount />  }  </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default ItemCount