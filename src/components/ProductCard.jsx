import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { addToCart } from '../store/cartSlice'
import { Link } from 'react-router-dom'

export default function ProductCard({ product }) {
  const dispatch = useDispatch()

  return (
    <Card className="product-card h-100 text-white">
      <Card.Img variant="top" src={product.img} alt={product.title} />
      <Card.Body className="d-flex flex-column">
        <Card.Title>{product.title}</Card.Title>
        <Card.Text className="mb-2">${product.price.toFixed(2)}</Card.Text>
        <div className="mt-auto d-flex gap-2">
          <Button as={Link} to="/productos" variant="outline-info">
            Ver
          </Button>
          <Button
            variant="primary"
            onClick={() => dispatch(addToCart(product))}
          >
            Agregar
          </Button>
        </div>
      </Card.Body>
    </Card>
  )
}
