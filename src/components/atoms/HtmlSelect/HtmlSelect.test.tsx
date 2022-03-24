import React from 'react'
import { mount } from '@cypress/react'
import HtmlSelect from './HtmlSelect'

describe('HtmlSelect Component', () => {
  it('HtmlSelect renders', () => {
    mount(<HtmlSelect />)
  })
})
