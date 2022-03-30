import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import ProductFilter from './ProductFilter'

export default {
  title: 'organisms/ProductFilter',
  component: ProductFilter,
} as ComponentMeta<typeof ProductFilter>

const Template: ComponentStory<typeof ProductFilter> = () => <ProductFilter />

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
