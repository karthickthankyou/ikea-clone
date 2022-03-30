import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import HeartIcon from '@heroicons/react/outline/HeartIcon'
import InfoCard from './InfoCard'

export default {
  title: 'molecules/InfoCard',
  component: InfoCard,
} as ComponentMeta<typeof InfoCard>

const Template: ComponentStory<typeof InfoCard> = (args) => (
  <InfoCard {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
  Icon: HeartIcon,
  title: 'Returns policy',
  description: 'Exceptions during COVID19',
  href: '/',
}
Primary.parameters = {}
