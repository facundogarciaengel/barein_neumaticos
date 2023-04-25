import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from "react";
import "./WhatsAppButton.css";


const WhatsAppButton = () => {
    return (
      <a
        href="https://api.whatsapp.com/send?phone=5491123286407"
        className="whatsapp-button"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faWhatsapp} size="2x" />
      </a>
    );
  };
  
  export default WhatsAppButton;