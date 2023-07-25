import { mount } from '@cypress/react'
import PriceCard from './PriceCard'

describe('PriceCard Component', () => {
  it('PriceCard renders', () => {
    mount(
      <PriceCard
        product={{
          id: 12,
          name: 'MICKE',
          category: 'Desk, white',
          subCategory: 'Bench',
          price: 7990,
          oldPrice: 9000,
          rating: 4.4,
          reviews: 34,
          images: [],
          createdAt: new Date(),
          tags: [],
          updatedAt: new Date(),
        }}
      />
    )
  })
})
