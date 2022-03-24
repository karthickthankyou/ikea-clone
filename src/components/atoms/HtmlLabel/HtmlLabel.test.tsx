import React from 'react'
import { mount } from '@cypress/react'
import HtmlLabel from './HtmlLabel'

describe('HtmlLabel Component', () => {
  it('HtmlLabel renders', () => {
    mount(<HtmlLabel title='Title'>Children</HtmlLabel>)
  })
})
