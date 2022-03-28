import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import ProductListing from './ProductListing'

export default {
  title: 'src/components/templates/ProductListing',
  component: ProductListing,
} as ComponentMeta<typeof ProductListing>

const Template: ComponentStory<typeof ProductListing> = (args) => <ProductListing {...args} />

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
