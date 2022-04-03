import React from 'react'
import { mount } from '@cypress/react'
import Rating from './Rating'

describe('Rating Component', () => {
  it('Rating renders', () => {
    mount(<Rating rating={3} />)
  })
})
