import { mount } from '@cypress/react'
import Masonry2 from './Masonry2'

describe('Masonry2 Component', () => {
  it('Masonry2 renders', () => {
    mount(
      <Masonry2
        gap='6'
        columns='5'
        shortOnes={[1, 2, 5, 6, 9]}
        childrenLimit={7}
      >
        <div>Hello</div>
      </Masonry2>
    )
  })
})
