import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import {faWhatsapp} from '@fortawesome/free-brands-svg-icons';
import "./App.css";
import Bienvenidos from "./components/bienvenidos/Bienvenidos";
import Servicios from "./components/servicios/Servicios";
import Contacto from "./components/contacto/Contacto";
import "./App.css";
import "./components/header/Header.css";

library.add(faCoffee);
library.add(faWhatsapp); 

function App() {
  return (
    <>
    <div>
   <Header/>
   </div>
    <Routes>
      <Route exact path="/" element={<Bienvenidos/>} />
      <Route exact path="/servicios" element={<Servicios/>} /> 
      <Route exact path="/contacto" element={<Contacto/>} />
    </Routes>
    </>
  );
}

export default App;

