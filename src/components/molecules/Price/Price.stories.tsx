import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Price from './Price'

export default {
  title: 'molecules/Price',
  component: Price,
} as ComponentMeta<typeof Price>

const Template: ComponentStory<typeof Price> = (args) => <Price {...args} />

export const Primary = Template.bind({})
Primary.args = {
  price: 2.29,
  oldPrice: 2.99,
}

export const OnlyPrice = Template.bind({})
OnlyPrice.args = {
  price: 2.29,
}
export const WithTaxMessage = Template.bind({})
WithTaxMessage.args = {
  price: 2.29,
  showTaxComment: true,
}
