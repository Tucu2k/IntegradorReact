import React from 'react'
import { Navbar, Nav, Container, NavDropdown, Badge } from 'react-bootstrap'
import { Link, NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function Header(){
  const items = useSelector(s => s.cart.items)
  const totalCount = Object.values(items).reduce((sum,i)=>sum + i.quantity, 0)
  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand as={Link} to="/">AstroBits🚀</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/">Home🏡</Nav.Link>
            <Nav.Link as={NavLink} to="/productos">Productos📦</Nav.Link>
            <Nav.Link as={NavLink} to="/sobre-nosotros">Sobre Nosotros👨🏻‍🚀</Nav.Link>
            <Nav.Link as={NavLink} to="/contacto">Contacto📞</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link as={NavLink} to="/carrito">
              Carrito 🛒 { totalCount>0 && <Badge bg="secondary" className="ms-1">{totalCount}</Badge> }
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
