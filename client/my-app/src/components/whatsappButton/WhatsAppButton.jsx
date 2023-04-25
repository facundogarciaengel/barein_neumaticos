import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import "./WhatsAppButton.css";

const WhatsAppButton = () => {
  const phoneNumber = "+541123286407"; // número de teléfono de Barein

  return (
    <a
      href={`https://wa.me/${phoneNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-button-big"
    >
      <div className="whatsapp-button-content">
        <FontAwesomeIcon icon={faWhatsapp} size="3x" />
        <span>¡Contáctanos por WhatsApp!</span>
      </div>
    </a>
  );
};

export default WhatsAppButton;
