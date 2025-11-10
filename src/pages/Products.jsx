import React, { useState } from 'react'
import products from '../data/products'
import { Row, Col, Form, Button, Badge } from 'react-bootstrap'
import ProductCard from '../components/ProductCard'
import Cart from './CartPage'
import  '../styles/Products.css';


export default function Products(){
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('all')

  const categories = ['all', ...Array.from(new Set(products.map(p=>p.category)))]
  const filtered = products.filter(p => 
    (category === 'all' || p.category === category) &&
    (p.title.toLowerCase().includes(query.toLowerCase()))
  )

  return (
    <>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h1>Productos</h1>
        <div><Badge bg="info">Total: {filtered.length}</Badge></div>
      </div>

      <Form className="mb-3">
        <Row>
          <Col md={6}>
            <Form.Control placeholder="Buscar producto..." value={query} onChange={e=>setQuery(e.target.value)} />
          </Col>
          <Col md={4}>
            <Form.Select value={category} onChange={e=>setCategory(e.target.value)}>
              {categories.map(c=> <option key={c} value={c}>{c}</option>)}
            </Form.Select>
          </Col>
        </Row>
      </Form>

      <Row xs={1} md={3} className="g-3">
        {filtered.map(p => (
          <Col key={p.id}>
            <ProductCard product={p} />
          </Col>
        ))}
      </Row>
    </>
  )
}
