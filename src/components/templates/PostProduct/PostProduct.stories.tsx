import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import PostProduct from './PostProduct'
import { ReduxAddUid } from 'src/store/Provider'

export default {
  title: 'templates/PostProduct',
  component: PostProduct,
  decorators: [(story) => <ReduxAddUid>{story()}</ReduxAddUid>],
} as ComponentMeta<typeof PostProduct>

const Template: ComponentStory<typeof PostProduct> = () => <PostProduct />

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
