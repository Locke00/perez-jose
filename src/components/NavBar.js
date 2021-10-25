

import { useState } from "react";

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
    



