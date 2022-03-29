import React from 'react'
import { mount } from '@cypress/react'
import Dialog from './Dialog'

describe('Dialog Component', () => {
  it('Dialog mounts', () => {
    mount(
      <Dialog open setOpen={() => {}}>
        <div>Hello</div>
      </Dialog>
    )
  })
})
