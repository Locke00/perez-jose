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
        <div class="nav-wrapper">
          <a href="index.html" class="brand-logo">Logo</a>
          <ul id="nav-mobile" class="left hide-on-med-and-down">
            <li><a href="index.html">Sass</a></li>
            <li><a href="index.html">Components</a></li>
            <li><a href="index.html">JavaScript</a></li>
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
    



