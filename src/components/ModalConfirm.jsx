import React from 'react'
import { Modal, Button } from 'react-bootstrap'

export default function ModalConfirm({show, onHide, title, body, onConfirm}){
  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton><Modal.Title>{title}</Modal.Title></Modal.Header>
      <Modal.Body>{body}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>Cancelar</Button>
        <Button variant="primary" onClick={() => { onConfirm(); onHide(); }}>Confirmar</Button>
      </Modal.Footer>
    </Modal>
  )
}
