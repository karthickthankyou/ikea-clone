import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import ChatWindow from './ChatWindow'

export default {
  title: 'src/components/organisms/ChatWindow',
  component: ChatWindow,
} as ComponentMeta<typeof ChatWindow>

const Template: ComponentStory<typeof ChatWindow> = () => <ChatWindow />

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
