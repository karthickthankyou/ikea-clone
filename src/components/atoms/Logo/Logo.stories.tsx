import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Logo from './Logo'

export default {
  title: 'src/components/atoms/Logo',
  component: Logo,
} as ComponentMeta<typeof Logo>

const Template: ComponentStory<typeof Logo> = (args) => <Logo {...args} />

export const Primary = Template.bind({})
export const White = Template.bind({})
White.args = {
  color: 'white',
}
