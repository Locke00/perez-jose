import { Link } from "react-router-dom"
import { useCartContext } from "../context/CartContext";

export  function ComponenteWidget() {
    const {obtenerQuantityTotal} = useCartContext()
    return (
        <>
            <Link to='/cart'><i className="small material-icons left"  >shopping_cart</i>
                <span className="btn-floating" style={{color: "white",backgroundColor: "black",textAlign: "center"}}>  {obtenerQuantityTotal()} </span>
            </Link>
        </>
    )
  }

export function CartWidget() {
    return(
        <span>
            <ComponenteWidget/>
        </span>
    )
}

export default CartWidget