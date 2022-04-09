import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import userReducer, {
  initialState as userInitialState,
} from 'src/store/user/userSlice'
import searchReducer, {
  initialState as searchInitialState,
} from 'src/store/search/index'
import userProductsReducer, {
  initialState as userProductsInitialData,
} from 'src/store/userProducts/userProductsSlice'
import { combineReducers, createStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'

import ProductListing from './ProductListing'

const reducers = {
  user: userReducer,
  search: searchReducer,
  userProducts: userProductsReducer,
}

const store = createStore(combineReducers(reducers), {
  user: userInitialState,
  search: searchInitialState,
  userProducts: userProductsInitialData,
})

export default {
  title: 'templates/ProductListing',
  component: ProductListing,
  decorators: [(story) => <Provider store={store}>{story()}</Provider>],
} as ComponentMeta<typeof ProductListing>

const Template: ComponentStory<typeof ProductListing> = () => <ProductListing />

export const Primary = Template.bind({})
Primary.args = {}
