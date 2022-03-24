import { mount } from '@cypress/react'
import React from 'react'
import Badge from './Badge'

describe('Badge Component', () => {
  it('should render', () => {
    mount(<Badge>Hello</Badge>)
  })
  it('should render as sm', () => {
    mount(<Badge size='sm'>Hello</Badge>)
  })
  it('should render as md', () => {
    mount(<Badge size='md'>Hello</Badge>)
  })
  it('should render as lg', () => {
    mount(<Badge size='lg'>Hello</Badge>)
  })
})
