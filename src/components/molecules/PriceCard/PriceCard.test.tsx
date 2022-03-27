import { mount } from '@cypress/react'
import PriceCard from './PriceCard'

describe('PriceCard Component', () => {
  it('PriceCard renders', () => {
    mount(<PriceCard />)
  })
})
