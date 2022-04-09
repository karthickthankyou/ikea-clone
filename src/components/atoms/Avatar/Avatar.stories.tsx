import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import img from 'src/assets/image.jpg'
import Avatar from './Avatar'

export default {
  title: 'atoms/Avatar',
  component: Avatar,
} as ComponentMeta<typeof Avatar>

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />

export const Small = Template.bind({})
Small.args = {
  size: 'sm',
  src: img.toString(),
}

export const Medium = Template.bind({})
Medium.args = {
  size: 'md',
  src: img.toString(),
}
export const Large = Template.bind({})
Large.args = {
  size: 'lg',
  src: img.toString(),
}
export const LargeRounded = Template.bind({})
LargeRounded.args = {
  size: 'lg',
  rounded: true,
  src: img.toString(),
}
export const LargeRoundedShadow = Template.bind({})
LargeRoundedShadow.args = {
  size: 'lg',
  rounded: true,
  shadow: true,
  src: img.toString(),
}
export const SmallCount = Template.bind({})
SmallCount.args = {
  size: 'lg',
  rounded: true,
  shadow: true,
  count: 4,
  src: img.toString(),
}
export const LargeCount = Template.bind({})
LargeCount.args = {
  size: 'lg',
  rounded: true,
  shadow: true,
  count: 100,
  src: img.toString(),
}
