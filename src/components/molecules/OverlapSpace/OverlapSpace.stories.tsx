import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import OverlapSpace from './OverlapSpace'

export default {
  title: 'molecules/OverlapSpace',
  component: OverlapSpace,
} as ComponentMeta<typeof OverlapSpace>

const Template: ComponentStory<typeof OverlapSpace> = (args) => (
  <OverlapSpace {...args} />
)

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
