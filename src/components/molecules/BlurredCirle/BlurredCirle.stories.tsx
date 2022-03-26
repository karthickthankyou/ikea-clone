import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import BlurredCirle from './BlurredCirle'

export default {
  title: 'molecules/BlurredCirle',
  component: BlurredCirle,
} as ComponentMeta<typeof BlurredCirle>

const Template: ComponentStory<typeof BlurredCirle> = (args) => (
  <BlurredCirle {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
  radius: 1000,
  className: 'fill-yellow-600 bg-gray-100',
}
Primary.parameters = {}
