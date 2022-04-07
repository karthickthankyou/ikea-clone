import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Badge from './Badge'

export default {
  title: 'atoms/Badge',
  component: Badge,
} as ComponentMeta<typeof Badge>

const Template: ComponentStory<typeof Badge> = (args) => <Badge {...args} />

export const Small = Template.bind({})
Small.args = {
  children: 'Hello World',
  size: 'sm',
}

export const Medium = Template.bind({})
Medium.args = {
  children: 'Hello World',
  size: 'md',
}

export const Large = Template.bind({})
Large.args = {
  children: 'Hello World',
  size: 'lg',
}
export const Primary = Template.bind({})
Primary.args = {
  children: 'Hello World',
  size: 'md',
  variant: 'primary',
}
export const Red = Template.bind({})
Red.args = {
  children: 'Hello World',
  size: 'md',
  variant: 'red',
}
export const Gray = Template.bind({})
Gray.args = {
  children: 'Hello World',
  size: 'md',
  variant: 'gray',
}
export const Green = Template.bind({})
Green.args = {
  children: 'Hello World',
  size: 'md',
  variant: 'green',
}
