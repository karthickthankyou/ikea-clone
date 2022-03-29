import { mount } from '@cypress/react'
import Login from './Login'

describe('Login Component', () => {
  it('Login renders', () => {
    mount(<Login />)
  })
})
