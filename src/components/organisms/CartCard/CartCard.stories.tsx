import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import CartCard from './CartCard'

export default {
  title: 'src/components/organisms/CartCard',
  component: CartCard,
} as ComponentMeta<typeof CartCard>

const Template: ComponentStory<typeof CartCard> = (args) => (
  <CartCard {...args} />
)

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
