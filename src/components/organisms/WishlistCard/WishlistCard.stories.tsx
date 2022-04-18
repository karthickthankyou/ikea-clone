import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import WishlistCard from './WishlistCard'

export default {
  title: 'src/components/organisms/WishlistCard',
  component: WishlistCard,
} as ComponentMeta<typeof WishlistCard>

const Template: ComponentStory<typeof WishlistCard> = (args) => (
  <WishlistCard {...args} />
)

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
