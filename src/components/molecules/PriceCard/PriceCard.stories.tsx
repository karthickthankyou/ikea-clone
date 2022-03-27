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
}
Primary.parameters = {}
