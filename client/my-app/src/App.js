import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";

import { library } from '@fortawesome/fontawesome-svg-core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

import {faWhatsapp} from '@fortawesome/free-brands-svg-icons';

import "./App.css";
//import Inicio from "./pages/Inicio";
//import Productos from "./pages/Productos";
import Contacto from "./components/contacto/Contacto";
import "./App.css";

library.add(faCoffee);
library.add(faWhatsapp); 

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

