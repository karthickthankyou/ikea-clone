import { mount } from '@cypress/react'
import Logo from './Logo'

describe('Logo Component', () => {
  it('Logo renders', () => {
    mount(<Logo />)
  })
})
