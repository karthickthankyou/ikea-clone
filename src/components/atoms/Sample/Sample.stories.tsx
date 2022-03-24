import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Sample from './Sample'

export default {
  title: 'src/components/atoms/Sample',
  component: Sample,
} as ComponentMeta<typeof Sample>

const Template: ComponentStory<typeof Sample> = (args) => <Sample {...args} />

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
