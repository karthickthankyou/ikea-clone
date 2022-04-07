import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import CreateAccount from './CreateAccount'

export default {
  title: 'templates/CreateAccount',
  component: CreateAccount,
} as ComponentMeta<typeof CreateAccount>

const Template: ComponentStory<typeof CreateAccount> = () => <CreateAccount />

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
