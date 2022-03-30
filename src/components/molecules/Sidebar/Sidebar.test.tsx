import React, { useState } from 'react'
import { mount } from '@cypress/react'
import Sidebar from './Sidebar'

describe('Sidebar Component', () => {
  it('Sidebar renders', () => {
    const [open, setOpen] = useState(false)
    mount(
      <Sidebar open={open} setOpen={setOpen}>
        <div>Children</div>
      </Sidebar>
    )
  })
})
