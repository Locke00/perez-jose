
import { CartWidget } from "./CartWidget"

export function Name() {
  return(
    <label>name</label>
  )
}  

export function FeedbackMessage(){
  return(
    <label>
      El componente de feedback
    </label>
  )
}



export function NavBar({nombre, nombre2}) {
  
  return (
    <nav>
      <div className="nav-wrapper">
      <CartWidget />
      <a href="index.html" className="brand-logo">    Tienda de Mascotas</a>
        
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><a href="index.html">Explorar Animales</a></li>
          <li><a href="index.html">Carrito</a></li>
          <li><a href="index.html">Favoritos</a></li>
          <li><a href="index.html">Nosotros</a></li>
          <li><a href="index.html">Ayuda</a></li>
        </ul>

        {/*<label>{nombre} {nombre2}</label>*/}
      </div>
      
      
    </nav>
  )
   
}
  
  export default NavBar
    



