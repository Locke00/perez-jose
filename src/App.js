//import  { NavBar, FeedbackMessage, Name, SuperBotton, SuperBotton2 } from './components/NavBar';
import { useState } from "react";
import  { NavBar  } from './components/NavBar';
import { ItemListContainer } from "./components/containers/ItemListContainer"
import Prueba0 from "./prueba/Prueba0";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import ItemDetailContainer from "./components/containers/ItemDetailContainer";
import { Cart } from "./components/cart/Cart";
import { useParams } from 'react-router';
import { Prueba } from "./prueba/Prueba";
import { Eventos } from "./prueba/Eventos";
import CartContext from "./context/CartContext";
import CartContextProvider from "./context/CartContext";


function App() {
  const [boolVar, setBoolVar] = useState(false)
  const [state, setState] = useState('soy estado')


  const mensajeItemListContainer = 'Mensaje enviado al ItemListContainer'


  const handleClick =()=>{
    setBoolVar(!boolVar)
  }
/*
  const animales = [
    { id: 1, raza: "Ovejero Aleman", price: 370 , description: "Perros muy cariñosos que saben defender el hogar."},
    { id: 2, raza: "Caniche", price: 370 , description: "Perros muy pequeños, de departamento."},
    { id: 3, raza: "Cocker", price: 270 ,description: "Perros con mucho pelo. Son mansos."},
    { id: 4, raza: "Pitbull", price: 400 ,description: "Buenos perros guardianes aunque pueden ser peligrosos para los dueños."},
    { id: 5, raza: "Doberman", price: 550 ,description: "Perros rápidos."},
    { id: 6, raza: "Pollitos", price: 110 ,description: "Adorables pollitos"},
    { id: 7, raza: "Caballo", price: 190 ,description: "Buenos caballos, no usar para arrastras carretas."},
  ];
*/

  return (
    <div className="App" onClick={handleClick}>
      
      {/*<Prueba />*/}
      {/*<Prueba />*/}
      {/*<Prueba0 />*/}
      {/*<ItemDetailContainer id={2}/>*/}
      {/*<ItemListContainer mensaje= {mensajeItemListContainer} />*/}

      <CartContextProvider>
        <Router>
          <NavBar />  
  
          <Switch>
            <Route exact path='/'>
              <ItemListContainer  />
              {/*<ItemListContainer mensaje= {mensajeItemListContainer} />*/}
              {/*<Route path='/categoria' component={ItemListContainer} />*/}
              {/*<Route path='/detalle' component={ItemDetailContainer} />*/}
            </Route>
            
            <Route exact path='/categoria/:id'>
              <ItemListContainer  />
            </Route>

            {/*<Route exact path='/categoria/:idCategoria' component={ItemListContainer} >
              <ItemListContainer  />
              </Route>*/}

            <Route exact path='/detalle/:id'>
              {/*<ItemDetailContainer id={5}/>*/}
              {/*console.log('pasa x aca')*/}
              <ItemDetailContainer />
            </Route>
            
            <Route exact path='/cart'>
              <Cart/>
            </Route>

            <Route exact path='/prueba'>
              <Prueba/>
            </Route>

            <Route exact path='/prueba/eventos'>
              <Eventos/>
            </Route>



          </Switch>

        </Router>
      </CartContextProvider>
      
      {/*<Name var1='variable1' componenteRender={SuperBotton}>
        <h4> name element1</h4>
      </Name>*
      <FeedbackMessage />*/}
      
      {/*<SuperBotton2/>*/}

      {/*<SuperBotton msg="mensaje-al-botton" />*/}



      




      {/*<header className="App-header">
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>*/}

    </div>
  );
}

export default App;
