import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

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
            <h2>Información de contacto</h2>
            <p>Acá puedes incluir información de contacto, como teléfonos, email, dirección, horarios de atención, entre otros.</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contacto;
