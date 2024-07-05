import { render, screen } from '@testing-library/react'
import About from './About'

describe('About Component', () => {
  it('Should render title and description', () => {
    render(<About/>)

    expect(screen.getByText('Sobre mi')).toBeInTheDocument()
    expect(screen.getByText(/¡Hola! Soy María Lopez/)).toBeInTheDocument()
  })

  it('Should have css class', () => {
    render(<About/>)

    const titleElement = screen.getByText('Sobre mi')
    expect(titleElement).toHaveClass('title')

    const descriptionElement = screen.getByText(/¡Hola! Soy María Lopez/)
    expect(descriptionElement).toHaveClass('description')
  })
})