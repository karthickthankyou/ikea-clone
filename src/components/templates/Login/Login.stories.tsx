import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Login from './Login'

export default {
  title: 'templates/Login',
  component: Login,
} as ComponentMeta<typeof Login>

const Template: ComponentStory<typeof Login> = () => <Login />

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
