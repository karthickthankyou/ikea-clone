import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import ProductCard01 from './ProductCard01'
import { ReduxAddUid } from 'src/store/Provider'

export default {
  title: 'organisms/ProductCard01',
  component: ProductCard01,
  decorators: [
    (story) => (
      <div className='max-w-xs'>
        <ReduxAddUid>{story()}</ReduxAddUid>
      </div>
    ),
  ],
} as ComponentMeta<typeof ProductCard01>

const Template: ComponentStory<typeof ProductCard01> = (args) => (
  <ProductCard01 {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
  product: {
    id: 1,
    name: 'BOKKREMLA',
    rating: 4.2,
    reviews: 12,
    price: 2.29,
    oldPrice: 2.99,
    images: [
      'https://res.cloudinary.com/thankyou/image/upload/v1648218985/nike/ikea/sofa-01_fgsi8y.jpg',
    ],
    category: 'Office',
    subCategory: 'Desk',
  },
}

export const HugePrice = Template.bind({})
HugePrice.args = {
  product: {
    id: 2,
    name: 'BOKKREMLA',
    rating: 4.2,
    price: 100000000.99,
    oldPrice: 199999999.99,
    reviews: 12,
    images: [
      'https://res.cloudinary.com/thankyou/image/upload/v1648218985/nike/ikea/sofa-01_fgsi8y.jpg',
    ],
    category: 'Office',
    subCategory: 'Desk',
  },
}

export const NoRatingAndDiscount = Template.bind({})
NoRatingAndDiscount.args = {
  product: {
    id: 3,
    name: 'BOKKREMLA',
    price: 2.29,
    images: [
      'https://res.cloudinary.com/thankyou/image/upload/v1648218985/nike/ikea/sofa-01_fgsi8y.jpg',
    ],
    category: 'Office',
    subCategory: 'Desk',
  },
}

export const LineClamps = Template.bind({})
LineClamps.args = {
  product: {
    id: 4,
    name: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. At enim perspiciatis pariatur sit amet consectetur adipisicing elit. At enim perspiciatis pariatur!!',
    images: [
      'https://res.cloudinary.com/thankyou/image/upload/v1648218985/nike/ikea/sofa-01_fgsi8y.jpg',
    ],
    category: 'Office',
    subCategory: 'Desk',
    price: 2.29,
  },
}
