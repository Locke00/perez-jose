function NavBar() {
    /*
    return (
        <div>
            <h1> Tienda de Mascotas</h1>
            <button >Menu</button>
            <button >Carrito</button>
            <button >Nosotros</button>
        </div>
    );*/

    return (
      <nav>
        <div className="nav-wrapper">
          <a href="index.html" className="brand-logo">Tienda de Mascotas</a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><a href="index.html">Explorar Animales</a></li>
            <li><a href="index.html">Carrito</a></li>
            <li><a href="index.html">Favoritos</a></li>
            <li><a href="index.html">Nosotros</a></li>
            <li><a href="index.html">Ayuda</a></li>
          </ul>
        </div>
      </nav>
    )
    
    /*return (
      <div className="App">
        <header className="App-header">
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
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
    );*/
  }
  
  export default NavBar;
    



