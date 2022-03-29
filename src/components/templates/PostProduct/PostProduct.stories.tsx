import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import PostProduct from './PostProduct'

export default {
  title: 'src/components/templates/PostProduct',
  component: PostProduct,
} as ComponentMeta<typeof PostProduct>

const Template: ComponentStory<typeof PostProduct> = () => <PostProduct />

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
