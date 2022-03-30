import { mount } from '@cypress/react'
import DeveloperCommentary from './DeveloperCommentary'

describe('DeveloperCommentary Component', () => {
  it('DeveloperCommentary renders', () => {
    mount(<DeveloperCommentary>Hello There.</DeveloperCommentary>)
  })
})
