import { mount } from '@cypress/react'
import Sample from './Sample'

describe('Sample Component', () => {
  it('Sample renders', () => {
    mount(<Sample />)
  })
})
