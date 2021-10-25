
import { CartWidget } from "./CartWidget"

export function Name(props) {
  console.log(props)
  
  return(
    <>
      <label>Comienza Name
      {props.children}  {/*si llamara a props.children[0] seria un error ya q al se un solo elemento se pasa como objeto unico y no como array*/}
      {props.componenteRender({msg: 'mensaje del Boton dentro de Name'})}
      <SuperBotton msg='otro mensaje'/>

      Termina Name
      <br/></label>
    </>
  )
}  

export function FeedbackMessage(){
  return(
    <label>
      El componente de feedback
    </label>
  )
}


export const SuperBotton = ({msg}) => {
  const mostrarEnConsola = () =>{
    console.log('Se ha presionado Click!. Se el ha pasado el mensaje: '+msg)
  }
  return (
    <>
      <button onClick={mostrarEnConsola}>Click!</button>
    </>
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
          <li><a href="index.html">{nombre2}</a></li>
        </ul>

        {/*<label>{nombre} {nombre2}</label>*/}
      </div>
      
      
    </nav>
  )
   
}
  
  export default NavBar
    



