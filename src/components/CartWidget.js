//import cartIcon from './cart.png';

import { Link } from "react-router-dom"
import { useCartContext } from "../context/CartContext";

export  function ComponenteWidget() {
    const {obtenerQuantityTotal} = useCartContext()
    return (
      <>
        {(obtenerQuantityTotal()>0) &&                
                <>
                    <Link to='/cart'><i className="small material-icons left"  >shopping_cart</i></Link>
                    <span className="btn-floating" style={{color: "white",backgroundColor: "blue"}}>  {obtenerQuantityTotal()} </span>
                </>    
        }
      </>
    );
  }


export function CartWidget() {

    return(
        <span>
            {/*<span>carasdfasdt</span>
            <img src={cartIcon} className="App-logo" alt="logo" />
            <span>cart2</span>*/}
            
            {/*<img src={cartIcon} className="cart" alt="logo" />4 
            shopping_cart*/}
            <ComponenteWidget/>

        </span>
    )
}
//text-align: "center"
export default CartWidget