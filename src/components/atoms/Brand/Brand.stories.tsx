import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Brand from './Brand'

export default {
  title: 'atoms/Brand',
  component: Brand,
} as ComponentMeta<typeof Brand>

const Template: ComponentStory<typeof Brand> = (args) => <Brand {...args} />

export const Primary = Template.bind({})
export const Red = Template.bind({})
Red.args = {
  className: 'fill-red-600',
}
