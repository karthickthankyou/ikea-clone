import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Badge from '../../atoms/Badge'
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

export const WithBadge = Template.bind({})
WithBadge.args = {
  displayName: 'Markus',
  category: 'Office chair',
  price: 14990,
  className: 'items-start',
  badge: (
    <Badge size='sm' variant='primary'>
      Top seller
    </Badge>
  ),
}
