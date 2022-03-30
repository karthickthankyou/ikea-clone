import { mount } from '@cypress/react'
import BlurredCirle from './BlurredCirle'

describe('BlurredCirle Component', () => {
  it('BlurredCirle renders', () => {
    mount(<BlurredCirle />)
  })
})
