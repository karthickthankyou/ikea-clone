import { mount } from '@cypress/react'
import Paragraphs from './Paragraphs'

describe('Paragraphs Component', () => {
  it('Paragraphs renders', () => {
    mount(<Paragraphs />)
  })
})
