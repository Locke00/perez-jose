import { Link } from "react-router-dom";
import { CartWidget } from "./CartWidget"

export function NavBar() {
  return (
    <nav class="blue">
      <div className="nav-wrapper">
        <CartWidget />
        <Link to='/' className="brand-logo">Tienda de Mascotas</Link>       
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/">Explorar Animales</Link></li>
          <li><Link to="/categoria/perro">Perros</Link></li>
          <li><Link to="/categoria/gato">Gatos</Link></li>
          <li><Link to="/cart">Carrito</Link></li>
        </ul>
      </div>
    </nav>

    
  )
}
  
export default NavBar
    



