//import cartIcon from './cart.png';

import { Link } from "react-router-dom"

export function CartWidget() {
    return(
        <span>
            {/*<span>carasdfasdt</span>
            <img src={cartIcon} className="App-logo" alt="logo" />
            <span>cart2</span>*/}
            
            {/*<img src={cartIcon} className="cart" alt="logo" />4 
            shopping_cart*/}
            
            
            <Link to='/cart'><i className="small material-icons left"  >shopping_cart</i></Link>
            

        </span>
    )
}
export default CartWidget