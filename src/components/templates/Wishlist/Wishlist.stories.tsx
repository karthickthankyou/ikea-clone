import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { sampleCartData } from 'src/store/sampleData'
import { ReduxAddUid } from 'src/store/Provider'
import SaveForLater from './Wishlist'

export default {
  title: 'templates/SaveForLater',
  component: SaveForLater,
  decorators: [(story) => <ReduxAddUid>{story()}</ReduxAddUid>],
} as ComponentMeta<typeof SaveForLater>

const Template: ComponentStory<typeof SaveForLater> = (args) => <SaveForLater />

export const NoResults = Template.bind({})
NoResults.args = {}

export const Primary = Template.bind({})
Primary.args = {}
