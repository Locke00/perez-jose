

import { useState } from "react";
import { Link } from "react-router-dom";
import { CartWidget } from "./CartWidget"


/*export function Name(props) {
  //console.log(props)
  
  return(
    <>
      <label>Comienza Name
      {props.children}  
      {props.componenteRender({msg: 'mensaje del Boton dentro de Name'})}
      Termina Name
      <br/></label>
    </>
  )
} */ 

/*export function FeedbackMessage(){
  return(
    <label>
      El componente de feedback
    </label>
  )
}*/


export const SuperBotton = ({msg}) => {
  //let boolVar
  const [boolVar, setBoolVar] = useState(false)
  //const estado = useState(false)
  //let boolVar = false
  
  //console.log(estado);
  
  
  const mostrarEnConsola = () =>{
    //console.log('Se ha presionado Click!. Se el ha pasado el mensaje: '+msg)
    console.log(boolVar);
    //boolVar = !boolVar
    setBoolVar(!boolVar)
  }
  
  return (
    <>
      <button onClick={mostrarEnConsola}>Click!</button>
    </>
  )
}

/*export const SuperBotton2 = () => {

  const [boolVar, setBoolVar] = useState(false)
  //console.log(estado);
 
  const mostrarEnConsola = () =>{
    console.log(boolVar);
    setBoolVar(!boolVar)
  }
  console.log('pre-render SuperBotton2()')
  return (
    <>
      <button onClick={mostrarEnConsola}>Click2!</button>
    </>
  )
}*/







export function NavBar() {
  return (
    <nav>
      <div className="nav-wrapper">
      <CartWidget />
      <Link to='/' className="brand-logo">Tienda de Mascotas</Link>       

      {/*<a href="index.html" className="brand-logo">    Tienda de Mascotas</a>*/}
        
        <ul id="nav-mobile" className="right hide-on-med-and-down">

          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/">Explorar Animales</Link></li>
          <li><Link to="/categoria/perro">Perros</Link></li>
          <li><Link to="/categoria/gato">Gatos</Link></li>
          {/*<li><Link to="/detalle">Favoritos</Link></li>*/}
          <li><Link to="/cart">Carrito</Link></li>
{/*
          <li><a href="/">Inicio</a></li>
          <li><a href="/categoria">Explorar Animales</a></li>
          <li><a href="/detalle">Favoritos</a></li>
          <li><a href="/cart">Carrito</a></li>
*/}          

          {/*<li><a href="/cart">Ayuda</a></li>*/}
        </ul>

        {/*<label>{nombre} {nombre2}</label>*/}
      </div>
      
      
    </nav>
  )
   
}
  
  export default NavBar
    



