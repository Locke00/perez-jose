//import  { NavBar, FeedbackMessage, Name, SuperBotton, SuperBotton2 } from './components/NavBar';
import { useState } from "react";
import  { NavBar  } from './components/NavBar';
import { ItemListContainer } from "./components/containers/ItemListContainer"


function App() {
  const [boolVar, setBoolVar] = useState(false)
  const [state, setState] = useState('soy estado')


  const mensajeItemListContainer = 'Mensaje enviado al ItemListContainer'
/*  
  useEffect(()=>{
    getFetch().then(
      (animales)=>{
          console.log(animales)
          
      }  
    )
    
  })
  
  
*/
  /*
  useEffect(() => {
    console.log('con dependencia')
  },[boolVar])
  */
  const handleClick =()=>{
    setBoolVar(!boolVar)
  }
  let nombres = [
    {id:1, nombre:"Jose"},
    {id:2, nombre:"Hernan"},
    {id:3, nombre:"Franco"}
  ]
  return (
    <div className="App" onClick={handleClick}>
      {nombres.map(
        (Persona)=>{
          return <h2 key={Persona.id}>{Persona.nombre}</h2>
        }
      )}
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
