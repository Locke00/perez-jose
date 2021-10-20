import  { NavBar, FeedbackMessage, Name } from './components/NavBar';
import { ItemListContainer } from "./components/containers/ItemListContainer"


function App() {

  const cad1 = 'nombre de la navbar'
  const cad2 = 'otro nombre de la navbar'
  const mensajeItemListContainer = 'Mensaje enviado al ItemListContainer'
  return (
    <div className="App">
      <NavBar nombre={cad1} nombre2={cad2} />  
      {/*<Name />
      <FeedbackMessage />*/}
      <ItemListContainer mensaje= {mensajeItemListContainer} />

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
