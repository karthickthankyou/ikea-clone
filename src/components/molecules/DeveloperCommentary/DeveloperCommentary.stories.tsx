import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import DeveloperCommentary from './DeveloperCommentary'

export default {
  title: 'src/components/molecules/DeveloperCommentary',
  component: DeveloperCommentary,
} as ComponentMeta<typeof DeveloperCommentary>

const Template: ComponentStory<typeof DeveloperCommentary> = (args) => (
  <DeveloperCommentary {...args} />
)

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
