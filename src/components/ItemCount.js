import { useState } from 'react';
import {Link} from "react-router-dom";

export function ItemCount({stock,initial,onAdd}) {
    const [count, setCount] = useState(Number(initial));

    const [inputType, setInputType] = useState("input");

    const handleInput = () => {
      setInputType("buy");
    };


    function InputCart({count,onAdd}){
      return(
        <button
          variant="success"
          onClick={()=>{
            onAdd(count)
          }}>
          Agregar al Carrito  

        </button>
      )

    
    }

    const InputBuy = () => {
      return (
        <button as={Link} to="/cart" variant="primary">
          Continuar la Compra
        </button>
      );
    };





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

    

    return(
        <>
          <div className="row">
            <div className="col s12 m6">
                <div className="card blue-grey darken-1">
                    
                    <div className="card-action">
                        <button className="col s2 waves-effect waves-light btn" onClick={decrementarContador}>-</button>
                        <span className="col s4 waves-effect teal lighten-2 center-align">{count}</span>
                        <button className="col s2 waves-effect waves-light btn" onClick={incrementarContador}>+</button>
                        <Button
              						onClick={() => setCount(count - 1)}
              						size="lg"
              						className="bi bi-dash-circle-fill"
              						disabled={count === 1}></Button>

                    <Button
          						onClick={() => setCount(count + 1)}
          						size="lg"
          						color="danger"
          						className="bi bi-plus-circle-fill"
          						disabled={count === stock}></Button>
				</td>


                    </div>
                    <br/>
                    <div><button className="btn" onClick={onAdd}>Al Carrito </button></div>  

                </div>
            </div>
        </div>


        </>
    )
}

export default ItemCount