import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import ChatWindow from './ChatWindow'
import { ReduxAddUid } from 'src/store/Provider'

export default {
  title: 'organisms/ChatWindow',
  component: ChatWindow,
} as ComponentMeta<typeof ChatWindow>

const Template: ComponentStory<typeof ChatWindow> = () => <ChatWindow />

export const Primary = Template.bind({})
export const Authenticated = Template.bind({})
Authenticated.decorators = [(story) => <ReduxAddUid>{story()}</ReduxAddUid>]
