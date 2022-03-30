import { mount } from '@cypress/react'
import Masonry from './Masonry'

describe('Masonry Component', () => {
  it('Masonry renders', () => {
    mount(<Masonry items={[]} />)
  })
})
