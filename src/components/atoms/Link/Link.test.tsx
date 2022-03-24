import React from 'react'
import { mount } from '@cypress/react'
import Link from './Link'

describe('Link Component', () => {
  it('Link renders', () => {
    mount(<Link href='/'>Link</Link>)
  })
})
