import { mount } from '@cypress/react'
import ChatWindow from './ChatWindow'

describe('ChatWindow Component', () => {
  it('ChatWindow renders', () => {
    mount(<ChatWindow />)
  })
})
