import { mount } from '@cypress/react'
import FormError from './FormError'

describe('FormError Component', () => {
  it('FormError renders', () => {
    mount(<FormError />)
  })
})
