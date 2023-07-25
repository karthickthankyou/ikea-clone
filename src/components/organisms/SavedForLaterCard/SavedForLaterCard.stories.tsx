import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { sampleSavedForLater } from 'src/store/sampleData'
import SavedForLaterCard from './SavedForLaterCard'
import { ReduxAddUid } from 'src/store/Provider'

export default {
  title: 'organisms/SavedForLaterCard',
  component: SavedForLaterCard,
  decorators: [(story) => <ReduxAddUid>{story()}</ReduxAddUid>],
} as ComponentMeta<typeof SavedForLaterCard>

const Template: ComponentStory<typeof SavedForLaterCard> = (args) => (
  <SavedForLaterCard {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
  product: sampleSavedForLater,
}
