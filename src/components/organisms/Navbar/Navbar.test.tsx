import { mount } from '@cypress/react'
import Navbar from './Navbar'

describe('Navbar Component', () => {
  it('Navbar renders', () => {
    mount(<Navbar />)
  })
})
