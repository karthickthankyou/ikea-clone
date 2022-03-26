import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import PriceMarker from './PriceMarker'

export default {
  title: 'molecules/PriceMarker',
  component: PriceMarker,
} as ComponentMeta<typeof PriceMarker>

const Template: ComponentStory<typeof PriceMarker> = (args) => (
  <PriceMarker {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
  displayName: 'Markus',
  category: 'Office chair',
  price: 14990,
}
Primary.parameters = {}
