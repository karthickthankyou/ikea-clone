import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Logo from './Logo'

export default {
  title: 'atoms/Logo',
  component: Logo,
} as ComponentMeta<typeof Logo>

const Template: ComponentStory<typeof Logo> = (args) => <Logo {...args} />

export const Primary = Template.bind({})
export const White = Template.bind({})
White.args = {
  color: 'white',
}
export const Yellow = Template.bind({})
Yellow.args = {
  bg: 'yellow',
  color: 'primary',
}
export const YellowReverse = Template.bind({})
YellowReverse.args = {
  bg: 'primary',
  color: 'yellow',
}
