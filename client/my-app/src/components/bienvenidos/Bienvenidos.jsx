import React from "react";
import WhatsAppButton from "../whatsappButton/WhatsAppButton";
import "./Bienvenidos.css";
import fondo from "../../images/fondoBarein.jpg";

function Bienvenidos() {
  return (
    <>
      <div className="header">
        {/* Aquí puedes agregar cualquier contenido que quieras en el encabezado */}
        <WhatsAppButton />
      </div>
      <section
        className="inicio"
        style={{
          backgroundImage: `url(${fondo})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          paddingTop: "50px", // agregar un padding superior para evitar que el contenido se solape con el encabezado
        }}
      >
        <div className="inicio-container">
          {/* Aquí puedes agregar el título si lo deseas */}
        </div>
      </section>
    </>
  );
}

export default Bienvenidos;
