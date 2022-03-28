import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import ProductPageTemplate from './ProductPageTemplate'

export default {
  title: 'templates/ProductPageTemplate',
  component: ProductPageTemplate,
} as ComponentMeta<typeof ProductPageTemplate>

const Template: ComponentStory<typeof ProductPageTemplate> = (args) => (
  <div className='mt-24'>
    <ProductPageTemplate />
  </div>
)

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
