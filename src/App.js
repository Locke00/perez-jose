//import  { NavBar, FeedbackMessage, Name, SuperBotton, SuperBotton2 } from './components/NavBar';
import  { NavBar,  } from './components/NavBar';
import { ItemListContainer } from "./components/containers/ItemListContainer"


function App() {

  const mensajeItemListContainer = 'Mensaje enviado al ItemListContainer'
  //console.log('pre-render App()')
  return (
    <div className="App">
      <NavBar />  
      {/*<Name var1='variable1' componenteRender={SuperBotton}>
        <h4> name element1</h4>
      </Name>*
      <FeedbackMessage />*/}
      <ItemListContainer mensaje= {mensajeItemListContainer} />
      {/*<SuperBotton2/>*/}

      {/*<SuperBotton msg="mensaje-al-botton" />*/}


      <header className="App-header">
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React

        </a>
      </header>
    </div>
  );
}

export default App;
