import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Home from './Home'
import { ReduxAddUid } from 'src/store/Provider'

export default {
  title: 'templates/Home',
  component: Home,
  decorators: [(story) => <ReduxAddUid>{story()}</ReduxAddUid>],
} as ComponentMeta<typeof Home>

const Template: ComponentStory<typeof Home> = (args) => <Home {...args} />

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
