import { Link } from "react-router-dom";
import { CartWidget } from "./CartWidget"

export function NavBar() {
  return (
    <nav className='blue'>
      <div className="nav-wrapper">
        <span className='left'>
          <CartWidget />
          <Link to='/' className="brand-logo truncate ">Tienda de mascotas</Link>       
        </span>
        <ul className="right blue truncate">
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
    



