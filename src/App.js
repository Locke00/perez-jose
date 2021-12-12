import  { NavBar  } from './components/NavBar';
import { ItemListContainer } from "./components/containers/ItemListContainer"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ItemDetailContainer from "./components/containers/ItemDetailContainer";
import { Cart } from "./components/cart/Cart";
import CartContextProvider from "./context/CartContext";

function App() {
    return (
        <div className="App">

            <CartContextProvider>
            <Router>
                <NavBar />  
                <Switch>

                <Route exact path='/'>
                    <ItemListContainer  />
                </Route>
                
                <Route exact path='/categoria/:id'>
                    <ItemListContainer  />
                </Route>

                <Route exact path='/detalle/:id'>
                    <ItemDetailContainer />
                </Route>
                
                <Route exact path='/cart'>
                    <Cart/>
                </Route>

                </Switch>

            </Router>
            </CartContextProvider>

        </div>
    )
}

export default App;
