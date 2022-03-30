import { mount } from '@cypress/react'
import PostProduct from './PostProduct'

describe('PostProduct Component', () => {
  it('PostProduct renders', () => {
    mount(<PostProduct />)
  })
})
