import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import DeveloperCommentary from './DeveloperCommentary'

export default {
  title: 'molecules/DeveloperCommentary',
  component: DeveloperCommentary,
} as ComponentMeta<typeof DeveloperCommentary>

const Template: ComponentStory<typeof DeveloperCommentary> = (args) => (
  <DeveloperCommentary {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
  children: (
    <div>
      Hey, I use this component to sprinkle commentary all over the product.
    </div>
  ),
}
Primary.parameters = {}
