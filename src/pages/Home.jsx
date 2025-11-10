import React from 'react'
import Hero from '../components/Hero'
import products from '../data/products'
import ProductCard from '../components/ProductCard'
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Home(){
  const featured = products.slice(0,3)
  return (
    <>
      <Hero />
      <section className="my-4">
        <h2>Sobre nosotros</h2>
        <p>La historia de como llegamos a las estrellas. <Link to='/sobre-nosotros'>Leer más</Link></p>
      </section>

      <section className="my-4">
        <h2>Productos destacados</h2>
        <Row xs={1} md={3} className="g-3">
          {featured.map(p => (
            <Col key={p.id}>
              <ProductCard product={p} />
            </Col>
          ))}
        </Row>
        <div className="mt-3">
          <Link to="/productos" className="btn btn-outline-primary">Ver todos los productos</Link>
        </div>
      </section>
    </>
  )
}
