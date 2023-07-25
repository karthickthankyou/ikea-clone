import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { sampleProductPageData } from 'src/store/sampleData'
import ProductPageTemplate from './ProductPageTemplate'
import { ReduxAddUid } from 'src/store/Provider'

export default {
  title: 'templates/ProductPageTemplate',
  component: ProductPageTemplate,
  decorators: [(story) => <ReduxAddUid>{story()}</ReduxAddUid>],
} as ComponentMeta<typeof ProductPageTemplate>

const Template: ComponentStory<typeof ProductPageTemplate> = (args) => (
  <div className='mt-24'>
    <ProductPageTemplate {...args} />
  </div>
)

export const Primary = Template.bind({})
Primary.args = {
  productId: 1,
}
