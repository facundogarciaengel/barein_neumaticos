import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faCoffee } from '@fortawesome/free-solid-svg-icons';





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
            <div>
              <h2>Información de contacto</h2>
              <p>Hipólito Yrigoyen 960 - Jose C. Paz</p>
              <p>Tel.: 02320-430402</p>
              <p><FontAwesomeIcon icon={faWhatsapp} /> 11-23286407 </p> 
              <p>e-Mail: sabrinaunlu@hotmail.com</p>
              <p>LUN A VIER 8:00 a 12:30 HS Y DE 14:30 A 18:30 HS.</p>
              <p>SAB 8:00 A 13:00 HS</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contacto;
