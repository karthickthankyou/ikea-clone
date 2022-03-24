import React from 'react'
import { mount } from '@cypress/react'
import Brand from './Brand'

describe('Brand Component', () => {
  it('Brand renders', () => {
    mount(<Brand />)
  })
})
