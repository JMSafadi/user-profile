import { render, screen } from '@testing-library/react'
import ContactForm from './ContactForm'

describe('ContactForm Component', () => {
  it('Should render form inputs and button', () => {
    render(<ContactForm/>)

    expect(screen.getByLabelText('Nombre')).toBeInTheDocument()
    expect(screen.getByLabelText('Email')).toBeInTheDocument()
    expect(screen.getByLabelText('Mensaje')).toBeInTheDocument()
    expect(screen.getByText('Enviar')).toBeInTheDocument()
  })
})