import React from 'react'
import { mount } from '@cypress/react'
import Accordion from './Accordion'

describe('Accordion Component', () => {
  it('Accordion renders', () => {
    mount(
      <Accordion title='Title'>
        <div>Hello</div>
      </Accordion>
    )
  })
})
