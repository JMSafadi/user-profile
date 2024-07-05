import { render, screen } from '@testing-library/react'
import Gallery from './Gallery'

describe('Gallery Component', () => {
  it('Should render title and photos', () => {
    render(<Gallery/>)

    expect(screen.getByText('Mi galería')).toBeInTheDocument()
    const photoElements = screen.getAllByAltText((content, element) => {
      return element && element.tagName.toLowerCase() === 'img' && content.startsWith('Photo')
    })
    expect(photoElements.length).toBe(9)
  })
})