import React from 'react'
import { mount } from '@cypress/react'
import HScroll from './HScroll'

describe('HScroll Component', () => {
  it('HScroll renders', () => {
    mount(
      <HScroll>
        <div>Hello</div>
        <div>Hello</div>
      </HScroll>
    )
  })
})
