import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { sampleSavedForLater } from 'src/store/sampleData'

import { ReduxAddUid } from 'src/store/Provider'
import WishlistCard from './WishlistCard'

export default {
  title: 'organisms/WishlistCard',
  component: WishlistCard,
} as ComponentMeta<typeof WishlistCard>

const Template: ComponentStory<typeof WishlistCard> = (args) => (
  <WishlistCard {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
  product: sampleSavedForLater,
}
Primary.decorators = [(story) => <ReduxAddUid>{story()}</ReduxAddUid>]
