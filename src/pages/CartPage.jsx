import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeFromCart, changeQuantity, clearCart } from '../store/cartSlice'
import { Table, Button, Form } from 'react-bootstrap'
import ModalConfirm from '../components/ModalConfirm'

export default function CartPage(){
  const items = useSelector(s=>s.cart.items)
  const dispatch = useDispatch()
  const [showClear, setShowClear] = useState(false)
  const [showRemove, setShowRemove] = useState({show:false, id:null})
  const [showBuy, setShowBuy] = useState(false)

  const list = Object.values(items)

  const total = list.reduce((sum,i)=> sum + i.product.price * i.quantity, 0)

  return (
    <div>
      <h1>Carrito</h1>
      {list.length===0 ? <p>El carrito está vacío.</p> : (
        <>
          <Table>
            <thead><tr><th>Producto</th><th>Precio</th><th>Cant</th><th>Subtotal</th><th></th></tr></thead>
            <tbody>
              {list.map(i=>(
                <tr key={i.product.id}>
                  <td>{i.product.title}</td>
                  <td>${i.product.price.toFixed(2)}</td>
                  <td style={{width:120}}>
                    <Form.Control type="number" min="1" value={i.quantity} onChange={e=>dispatch(changeQuantity({id:i.product.id, qty: Number(e.target.value)}))} />
                  </td>
                  <td>${(i.product.price * i.quantity).toFixed(2)}</td>
                  <td><Button variant="danger" size="sm" onClick={()=>setShowRemove({show:true, id:i.product.id})}>Eliminar</Button></td>
                </tr>
              ))}
            </tbody>
          </Table>

          <div className="d-flex justify-content-between align-items-center">
            <h4>Total: ${total.toFixed(2)}</h4>
            <div className="d-flex gap-2">
              <Button variant="secondary" onClick={()=>setShowClear(true)}>Vaciar carrito</Button>
              <Button onClick={()=>setShowBuy(true)}>Finalizar compra</Button>
            </div>
          </div>
        </>
      )}

      <ModalConfirm show={showClear} onHide={()=>setShowClear(false)} title="Vaciar carrito" body="¿Seguro que querés vaciar el carrito?" onConfirm={()=>dispatch(clearCart())} />
      <ModalConfirm show={showBuy} onHide={()=>setShowBuy(false)} title="Confirmar compra" body={"Confirmar compra por $"+total.toFixed(2)+"?"} onConfirm={()=>{ dispatch(clearCart()); alert('Compra realizada con éxito (simulada).') }} />
      <ModalConfirm show={showRemove.show} onHide={()=>setShowRemove({show:false,id:null})} title="Eliminar producto" body="¿Eliminar este producto del carrito?" onConfirm={()=>dispatch(removeFromCart(showRemove.id))} />
    </div>
  )
}
