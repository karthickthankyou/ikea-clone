import { mount } from '@cypress/react'
import OverlapSpace, { OverlapSpaceChild } from './OverlapSpace'

describe('OverlapSpace Component', () => {
  it('OverlapSpace renders', () => {
    mount(
      <OverlapSpace>
        <OverlapSpaceChild className='-z-10'>First element</OverlapSpaceChild>
        <OverlapSpaceChild>Second element</OverlapSpaceChild>
      </OverlapSpace>
    )
  })
})
