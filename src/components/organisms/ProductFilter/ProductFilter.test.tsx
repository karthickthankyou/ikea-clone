import { mount } from '@cypress/react'
import ProductFilter from './ProductFilter'

describe('ProductFilter Component', () => {
  it('ProductFilter renders', () => {
    mount(<ProductFilter />)
  })
})
