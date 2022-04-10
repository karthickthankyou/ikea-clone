import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import PurchasedCard from './PurchasedCard'

export default {
  title: 'src/components/organisms/PurchasedCard',
  component: PurchasedCard,
} as ComponentMeta<typeof PurchasedCard>

const Template: ComponentStory<typeof PurchasedCard> = (args) => <PurchasedCard {...args} />

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
