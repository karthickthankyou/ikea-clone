import { mount } from '@cypress/react'
import OverlapSpace from './OverlapSpace'

describe('OverlapSpace Component', () => {
  it('OverlapSpace renders', () => {
    mount(
      <OverlapSpace>
        <OverlapSpace.Child className='-z-10'>First element</OverlapSpace.Child>
        <OverlapSpace.Child>Second element</OverlapSpace.Child>
      </OverlapSpace>
    )
  })
})
