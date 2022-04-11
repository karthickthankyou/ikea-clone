import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import userReducer, {
  initialState as userInitialState,
} from 'src/store/user/userSlice'
import userProductsReducer, {
  initialState as userProductsInitialData,
} from 'src/store/userProducts/userProductsSlice'
import { Provider } from 'react-redux'
import { combineReducers, createStore } from '@reduxjs/toolkit'
import { sampleProductPageData } from 'src/store/sampleData'
import ProductPageTemplate from './ProductPageTemplate'

const reducers = { user: userReducer, userProducts: userProductsReducer }

const store = createStore(combineReducers(reducers), {
  user: userInitialState,
  userProducts: userProductsInitialData,
})

export default {
  title: 'templates/ProductPageTemplate',
  component: ProductPageTemplate,
  decorators: [(story) => <Provider store={store}>{story()}</Provider>],
} as ComponentMeta<typeof ProductPageTemplate>

const Template: ComponentStory<typeof ProductPageTemplate> = (args) => (
  <div className='mt-24'>
    <ProductPageTemplate {...args} />
  </div>
)

export const Primary = Template.bind({})
Primary.args = {
  product: sampleProductPageData,
}
