import React from 'react'
import { mount } from '@cypress/react'
import Container from './Container'

describe('Container Component', () => {
  it('Container renders', () => {
    mount(<Container>Hello</Container>)
  })
})
