import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope as farEnvelope } from "@fortawesome/free-regular-svg-icons";
import WhatsAppButton from "../whatsapp/WhatsAppButton";

import "./Contacto.css";

const Contacto = () => {
  return (
    <div className="contacto">
      <Container>
        <Row>
          <Col xs={12} md={6}>
            <h2>Formulario de contacto</h2>
            <Form>
              <Form.Group controlId="nombre">
                <Form.Label>Nombre completo</Form.Label>
                <Form.Control type="text" placeholder="Ingresa tu nombre completo" />
              </Form.Group>

              <Form.Group controlId="email">
                <Form.Label>Dirección de email</Form.Label>
                <Form.Control type="email" placeholder="Ingresa tu email" />
              </Form.Group>

              <Form.Group controlId="asunto">
                <Form.Label>Asunto</Form.Label>
                <Form.Control type="text" placeholder="Ingresa el asunto" />
              </Form.Group>

              <Form.Group controlId="mensaje">
                <Form.Label>Mensaje</Form.Label>
                <Form.Control as="textarea" rows={5} placeholder="Ingresa tu mensaje" />
              </Form.Group>

              <Button variant="primary" type="submit">
                Enviar
              </Button>
            </Form>
          </Col>
          <Col xs={12} md={6}>
            <div className="contacto-info">
              <h2>Información de contacto</h2>
              <div>
                <FontAwesomeIcon icon={faMapMarkerAlt} />
                <a href="https://www.google.com.ar/maps/place/Neum%C3%A1ticos+Barein+GP/@-34.5149552,-58.7460756,17z/data=!3m1!4b1!4m6!3m5!1s0x95bc98041eb2c5df:0xbcbb5a7997a4aef0!8m2!3d-34.5149596!4d-58.7435007!16s%2Fg%2F11ckxwbswg" target="_blank" rel="noopener noreferrer">
                  <span> Hipólito Yrigoyen 960 - Jose C. Paz </span>
                </a>
              </div>
              <div>
                <p><FontAwesomeIcon icon={faWhatsapp} /> 11-23286407 </p>
              </div>
              <div>
                <FontAwesomeIcon icon={farEnvelope} />
                <span> sabrinaunlu@hotmail.com </span>
              </div>
              <h2>Horarios de atención</h2>
              <p>LUN A VIER 8:00 a 12:30 HS Y DE 14:30 A 18:30 HS.</p>
              <p>SAB 8:00 A 13:00 HS</p>
            </div>
          </Col>
          <WhatsAppButton />
        </Row>
      </Container>
    </div>
  );
};

export default Contacto;
