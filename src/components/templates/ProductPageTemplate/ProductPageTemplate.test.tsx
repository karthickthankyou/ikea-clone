import { mount } from '@cypress/react'
import ProductPageTemplate from './ProductPageTemplate'

describe('ProductPageTemplate Component', () => {
  it('ProductPageTemplate renders', () => {
    mount(<ProductPageTemplate />)
  })
})
