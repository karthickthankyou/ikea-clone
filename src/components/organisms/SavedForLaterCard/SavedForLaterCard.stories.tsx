import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import SavedForLaterCard from './SavedForLaterCard'

export default {
  title: 'organisms/SavedForLaterCard',
  component: SavedForLaterCard,
} as ComponentMeta<typeof SavedForLaterCard>

const Template: ComponentStory<typeof SavedForLaterCard> = (args) => (
  <SavedForLaterCard {...args} />
)

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
