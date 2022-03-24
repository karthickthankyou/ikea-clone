import React from 'react'
import { mount } from '@cypress/react'
import FlexboxGrid from './FlexboxGrid'

describe('FlexboxGrid Component', () => {
  it('should render', () => {
    mount(<FlexboxGrid />)
  })
})
