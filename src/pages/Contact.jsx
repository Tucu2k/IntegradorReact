import React from 'react'
import { Formik, Form as FForm, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { Form, Button, Alert, Container } from 'react-bootstrap'
import './Contact.css'

const schema = Yup.object({
  nombre: Yup.string().required('Requerido'),
  apellido: Yup.string().required('Requerido'),
  email: Yup.string().email('Email inválido').required('Requerido'),
  asunto: Yup.string().min(10, 'Debe tener al menos 10 caracteres').required('Requerido'),
})

export default function Contact() {
  return (
    <Container className="contact-container py-5 text-light">
      <h1 className="contact-title text-center mb-4">📬 Contacto</h1>

      <Formik
        initialValues={{ nombre: '', apellido: '', email: '', asunto: '' }}
        validationSchema={schema}
        onSubmit={(values, { setSubmitting, resetForm, setStatus }) => {
          setSubmitting(true)

          setTimeout(() => {
            setStatus({ success: true })
            resetForm()
            setSubmitting(false)
          }, 500)
        }}
      >
        {({ handleSubmit, isSubmitting, status }) => (
          <FForm onSubmit={handleSubmit} noValidate className="contact-form mx-auto">
            {status && status.success && (
              <Alert variant="success" className="text-center">
                🌟 Mensaje enviado correctamente (simulado)
              </Alert>
            )}

            <Form.Group className="mb-3">
              <Form.Label>Nombre</Form.Label>
              <Field name="nombre" as={Form.Control} className="form-field" />
              <div className="text-danger small mt-1">
                <ErrorMessage name="nombre" />
              </div>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Apellido</Form.Label>
              <Field name="apellido" as={Form.Control} className="form-field" />
              <div className="text-danger small mt-1">
                <ErrorMessage name="apellido" />
              </div>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Field name="email" as={Form.Control} className="form-field" />
              <div className="text-danger small mt-1">
                <ErrorMessage name="email" />
              </div>
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Label>Asunto</Form.Label>
              <Field name="asunto" as="textarea" rows={4} className="form-field" />
              <div className="text-danger small mt-1">
                <ErrorMessage name="asunto" />
              </div>
            </Form.Group>

            <div className="text-center">
              <Button type="submit" disabled={isSubmitting} className="submit-btn">
                Enviar
              </Button>
            </div>
          </FForm>
        )}
      </Formik>
    </Container>
  )
}

