import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Login from './Login'
import { ReduxAddUid } from 'src/store/Provider'

export default {
  title: 'templates/Login',
  component: Login,
  decorators: [(story) => <ReduxAddUid>{story()}</ReduxAddUid>],
} as ComponentMeta<typeof Login>

const Template: ComponentStory<typeof Login> = () => <Login />

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
