import { mount } from '@cypress/react'
import ProductListing from './ProductListing'

describe('ProductListing Component', () => {
  it('ProductListing renders', () => {
    mount(<ProductListing />)
  })
})
