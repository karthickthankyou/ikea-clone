import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import ProductListing from './ProductListing'
import { ReduxAddUid } from 'src/store/Provider'

export default {
  title: 'templates/ProductListing',
  component: ProductListing,
  decorators: [(story) => <ReduxAddUid>{story()}</ReduxAddUid>],
} as ComponentMeta<typeof ProductListing>

const Template: ComponentStory<typeof ProductListing> = (args) => (
  <ProductListing {...args} />
)
