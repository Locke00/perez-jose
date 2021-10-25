import  { NavBar, FeedbackMessage, Name, SuperBotton } from './components/NavBar';
import { ItemListContainer } from "./components/containers/ItemListContainer"


function App() {

  const cad1 = 'nombre de la navbar'
  const cad2 = 'otro nombre de la navbar'
  const mensajeItemListContainer = 'Mensaje enviado al ItemListContainer'
  return (
    <div className="App">
      <NavBar nombre={cad1} nombre2={cad2} />  
      <Name var1='variable1' componenteRender={SuperBotton}>
        <h4> name element1</h4>
      </Name>{/*
      <FeedbackMessage />*/}
      <ItemListContainer mensaje= {mensajeItemListContainer} />
      <SuperBotton msg="mensaje-al-botton" />


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
