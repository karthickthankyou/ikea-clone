import React from 'react'
import { mount } from '@cypress/react'
import Notification from './Notification'

describe('Notification Component', () => {
  it('Notification mounts', () => {
    mount(<Notification />)
  })
})
