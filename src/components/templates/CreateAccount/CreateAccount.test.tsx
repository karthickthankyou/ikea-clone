import { mount } from '@cypress/react'
import CreateAccount from './CreateAccount'

describe('CreateAccount Component', () => {
  it('CreateAccount renders', () => {
    mount(<CreateAccount />)
  })
})
