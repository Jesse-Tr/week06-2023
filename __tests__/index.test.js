import { render, screen } from '@testing-library/react'
import Home from '../pages/index'
import '@testing-library/jest-dom'

const allData = [
  {
    "name": "ginny joe",
    "id": 3

}
];

 
describe('Home', () => {
  it('renders a heading', () => {
    render(<Home />)
 // test static heading
    const heading = screen.getByRole('heading', {
      name: /List of Names/i,
    })
 
    expect(heading).toBeInTheDocument()
  })   
  // test a dynamic element  
  it('renders a link', () => {
      render(<Home />)
   
      const myLink = screen.getByRole('link', {
        name: /Visit SRJC/i,
      })
   
      expect(myLink).toBeInTheDocument()
    })        
  // tests a dynamic element rendered by json
  it('renders a link', () => {
      render(<Home allData={allData}/>)
   
      const myLink2 = screen.getByRole('link', {
        name: /ginny joe/i,
      })
   
      expect(myLink2).toBeInTheDocument()
    })
  })   