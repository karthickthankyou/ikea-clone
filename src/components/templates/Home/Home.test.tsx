import { mount } from '@cypress/react'
import Home from './Home'

describe('Home Component', () => {
  it('Home renders', () => {
    mount(<Home />)
  })
})
