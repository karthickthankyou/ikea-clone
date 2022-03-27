import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import PriceCard from './PriceCard'

export default {
  title: 'src/components/molecules/PriceCard',
  component: PriceCard,
} as ComponentMeta<typeof PriceCard>

const Template: ComponentStory<typeof PriceCard> = (args) => (
  <PriceCard {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
  title: 'MICKE',
  category: 'Desk, white',
  price: 7990,
  oldPrice: 9000,
  description:
    'Lorem, ipsum dolor sit amet consectetur adipisicing elit. In temporibus vel provident dolorum, laudantium autem ad repellat voluptas voluptatem veniam quod atque, unde possimus!',
}
Primary.parameters = {}
