import { mount } from '@cypress/react'
import Tooltip from './Tooltip'

describe('Tooltip Component', () => {
  it('Tooltip renders', () => {
    mount(<Tooltip />)
  })
})
