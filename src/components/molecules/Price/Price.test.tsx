import { mount } from '@cypress/react'
import Price from './Price'

describe('Price Component', () => {
  it('Price renders', () => {
    mount(<Price price={2.29} oldPrice={2.99} />)
  })
})
