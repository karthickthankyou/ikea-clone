import React from 'react'
import { mount } from '@cypress/react'
import PopoverMenuItem from './PopoverMenuItem'

describe('PopoverMenuItem Component', () => {
  it('PopoverMenuItem renders', () => {
    mount(
      <PopoverMenuItem>
        <div>Hello</div>
      </PopoverMenuItem>
    )
  })
})
