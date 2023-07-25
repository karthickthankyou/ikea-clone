import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import PriceCard from './PriceCard'
import { ReduxAddUid } from 'src/store/Provider'

export default {
  title: 'molecules/PriceCard',
  component: PriceCard,
} as ComponentMeta<typeof PriceCard>

const Template: ComponentStory<typeof PriceCard> = (args) => (
  <PriceCard {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
  product: {
    id: 12,
    subCategory: 'Bench',
    name: 'MICKE',
    category: 'Desk, white',
    price: 7990,
    oldPrice: 9000,
    createdAt: new Date(),
    images: [],
    tags: [],
    updatedAt: new Date(),
    __typename: 'Product',
  },
}
Primary.parameters = {}
Primary.decorators = [(story) => <ReduxAddUid>{story()}</ReduxAddUid>]
