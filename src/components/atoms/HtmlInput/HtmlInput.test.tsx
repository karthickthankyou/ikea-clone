import React from 'react'
import { mount } from '@cypress/react'
import HtmlInput from './HtmlInput'

describe('HtmlInput Component', () => {
  it('HtmlInput renders', () => {
    mount(<HtmlInput />)
  })
})
