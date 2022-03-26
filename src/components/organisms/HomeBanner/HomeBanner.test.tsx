import { mount } from '@cypress/react'
import HomeBanner from './HomeBanner'

describe('HomeBanner Component', () => {
  it('HomeBanner renders', () => {
    mount(<HomeBanner />)
  })
})
