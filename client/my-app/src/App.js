import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/header/Header";
//import Inicio from "./pages/Inicio";
//import Productos from "./pages/Productos";
//import Contacto from "./pages/Contacto";
import "./App.css";

function App() {
  return (
    <Router>
      <Header />
    
        {/* <Route exact path="/" component={Inicio} />
        <Route exact path="/productos" component={Productos} />
        <Route exact path="/contacto" component={Contacto} /> */}
    
    </Router>
  );
}

export default App;

