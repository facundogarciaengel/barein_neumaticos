import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";

import "./App.css";
//import Inicio from "./pages/Inicio";
//import Productos from "./pages/Productos";
import Contacto from "./components/contacto/Contacto";
import "./App.css";

function App() {
  return (
    <>
   <Header/>
    <Routes>
      {/* <Route exact path="/" component={Inicio} />
      <Route exact path="/productos" component={Productos} /> */}
      <Route exact path="/contacto" element={<Contacto/>} />
    </Routes>
    </>
  );
}

export default App;

