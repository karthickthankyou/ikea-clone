import React from 'react'
import { mount } from '@cypress/react'
import HtmlTextArea from './HtmlTextArea'

describe('HtmlTextArea Component', () => {
  it('HtmlTextArea renders', () => {
    mount(<HtmlTextArea />)
  })
})
