import { render, screen } from '@testing-library/react'
import Home from '../pages/index'
import '@testing-library/jest-dom'
 
describe('Home', () => {
  it('renders a heading', () => {
    render(<Home />)
 
    const heading = screen.getByRole('heading', {
      name: /List of Names/i,
    })
 
    expect(heading).toBeInTheDocument()
  })
})        

describe('Home', () => {
    it('renders a link', () => {
      render(<Home />)
   
      const heading = screen.getByRole('link', {
        name: /Visit SRJC/i,
      })
   
      expect(heading).toBeInTheDocument()
    })
  })          

  