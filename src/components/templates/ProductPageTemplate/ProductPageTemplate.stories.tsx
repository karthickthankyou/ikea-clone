import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import ProductPageTemplate from './ProductPageTemplate'

export default {
  title: 'src/components/templates/ProductPageTemplate',
  component: ProductPageTemplate,
} as ComponentMeta<typeof ProductPageTemplate>

const Template: ComponentStory<typeof ProductPageTemplate> = (args) => <ProductPageTemplate {...args} />

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
