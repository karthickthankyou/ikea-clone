import { mount } from '@cypress/react'
import Footer from './Footer'

describe('Footer Component', () => {
  it('Footer renders', () => {
    mount(<Footer />)
  })
})
