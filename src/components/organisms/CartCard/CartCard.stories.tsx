/* eslint-disable camelcase */
import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { UserProductStatus } from 'src/generated'
import CartCard from './CartCard'
import { ReduxAddUid } from 'src/store/Provider'

export default {
  title: 'molecules/CartCard',
  component: CartCard,
  decorators: [
    (story) => (
      <div className='max-w-sm'>
        <ReduxAddUid>{story()}</ReduxAddUid>
      </div>
    ),
  ],
} as ComponentMeta<typeof CartCard>

const Template: ComponentStory<typeof CartCard> = (args) => (
  <CartCard {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
  product: {
    pid: 1,
    createdAt: '',
    id: 1,
    status: UserProductStatus.Wishlisted,
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
  },
}
