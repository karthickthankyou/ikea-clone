import { mount } from '@cypress/react'
import PriceCard from './PriceCard'

describe('PriceCard Component', () => {
  it('PriceCard renders', () => {
    mount(
      <PriceCard
        id={12}
        title='MICKE'
        category='Desk, white'
        price={7990}
        oldPrice={9000}
        rating={4.4}
        reviews={34}
      />
    )
  })
})
