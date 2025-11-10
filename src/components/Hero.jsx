import React from 'react'
import { Button, Row, Col, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Hero.css' // 🔹 agregamos un CSS propio

export default function Hero() {
  return (
    <section className="hero-section text-light py-5">
      <Row className="align-items-center">
        <Col md={6} className="text-center text-md-start">
          <h1 className="display-5 fw-bold">Bienvenido a AstroBits 🚀</h1>
          <p className="lead">La mejor tienda de hardware de la galaxia</p>
          <Button as={Link} to="/productos" variant="danger" size="lg">
            Ver productos
          </Button>
        </Col>

        <Col md={6} className="mt-4 mt-md-0 text-center">
          <Image
            src="/src/imagenes/argos-removebg-preview.png"
            alt="Hero"
            fluid
            className="hero-img"
          />
        </Col>
      </Row>
    </section>
  )
}

