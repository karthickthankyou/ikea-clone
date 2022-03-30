import { mount } from '@cypress/react'
import PriceCard from './PriceCard'

describe('PriceCard Component', () => {
  it('PriceCard renders', () => {
    mount(
      <PriceCard
        title='MICKE'
        category='Desk, white'
        price={7990}
        oldPrice={9000}
      />
    )
  })
})
