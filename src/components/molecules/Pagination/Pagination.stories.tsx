import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Pagination from './Pagination'

export default {
  title: 'src/components/molecules/Pagination',
  component: Pagination,
} as ComponentMeta<typeof Pagination>

const Template: ComponentStory<typeof Pagination> = (args) => (
  <Pagination {...args} />
)

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
