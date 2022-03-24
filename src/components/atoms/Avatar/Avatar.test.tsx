import React from 'react'
import { mount } from '@cypress/react'
import Avatar from './Avatar'

describe('Avatar Component', () => {
  it('should render', () => {
    mount(<Avatar src='https://via.placeholder.com/150' size='sm' />)
  })
})
