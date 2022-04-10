import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import CartTemplate from './CartTemplate'

export default {
  title: 'src/components/templates/CartTemplate',
  component: CartTemplate,
} as ComponentMeta<typeof CartTemplate>

const Template: ComponentStory<typeof CartTemplate> = (args) => <CartTemplate {...args} />

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
