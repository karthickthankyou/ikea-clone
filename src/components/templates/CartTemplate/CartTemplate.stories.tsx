import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { ReduxAddUid } from 'src/store/Provider'
import CartTemplate from './CartTemplate'

export default {
  title: 'templates/CartTemplate',
  component: CartTemplate,
  decorators: [(story) => <ReduxAddUid>{story()}</ReduxAddUid>],
} as ComponentMeta<typeof CartTemplate>

const Template: ComponentStory<typeof CartTemplate> = (args) => <CartTemplate />

export const Primary = Template.bind({})
Primary.args = {}
