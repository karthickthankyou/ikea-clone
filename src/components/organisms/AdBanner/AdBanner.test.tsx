import { mount } from '@cypress/react'
import AdBanner from './AdBanner'

describe('AdBanner Component', () => {
  it('AdBanner renders', () => {
    mount(
      <AdBanner
        src='Download now'
        title='Download now'
        description='Download now'
        buttonText='Download now'
        href='/'
      />
    )
  })
})
