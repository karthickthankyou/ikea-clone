/* eslint-disable camelcase */
import { mount } from '@cypress/react'
import { User_Products_Type_Enum } from 'src/generated/graphql'
import WishlistCard from './WishlistCard'

describe('WishlistCard Component', () => {
  it('WishlistCard renders', () => {
    mount(
      <WishlistCard
        product={{
          pid: 1,
          createdAt: '',
          id: 1,
          type: User_Products_Type_Enum.Wishlisted,
          uid: '',
          updatedAt: '',
          product: {
            name: 'BOKKREMLA',
            category: 'Office',
            subCategory: 'Desk, white',
            price: 2.29,
            images: [
              'https://res.cloudinary.com/thankyou/image/upload/v1648218985/nike/ikea/sofa-01_fgsi8y.jpg',
            ],
          },
        }}
      />
    )
  })
})
