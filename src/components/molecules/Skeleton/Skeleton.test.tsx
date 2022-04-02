import React from 'react'
import { mount } from '@cypress/react'
import Skeleton from './Skeleton'

describe('Skeleton Component', () => {
  test('Skeleton mounts', () => {
    mount(<Skeleton />)
  })
})
