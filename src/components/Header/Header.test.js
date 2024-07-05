import { render, screen } from '@testing-library/react'
import Header from './Header'

jest.mock('../ProfileImg/ProfileImg', () => {
  return function MockProfileImg() {
    return <div>Mocked Profile Image</div>
  }
})

describe('Header Component', () => {
  it('Should render', () => {
    render(<Header imageUrl='/header/profile-user-image.jpg'/>)
    expect(screen.getByText('María López')).toBeInTheDocument()
    expect(screen.getByText('Fotógrafa Profesional')).toBeInTheDocument()
    expect(screen.getByText('Madrid, España')).toBeInTheDocument()
    expect(screen.getByText('Mocked Profile Image')).toBeInTheDocument()
  })

  it('Should render profile image', () => {
    render(<Header imageUrl="/header/profile-user-image.jpg"/>)
    const profileImg = screen.getByText('Mocked Profile Image')
    expect(profileImg).toBeInTheDocument()
  })
})