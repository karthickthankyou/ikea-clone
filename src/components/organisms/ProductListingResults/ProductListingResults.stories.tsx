import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Provider } from 'react-redux'
import userProductsReducer, {
  initialState as userProductsInitialState,
} from 'src/store/userProducts/userProductsSlice'
import searchReducer, {
  initialState as searchInitialState,
} from 'src/store/search/index'

import { combineReducers, createStore } from '@reduxjs/toolkit'
import {
  sampleSearchData,
  sampleSearchDataFetching,
  sampleUserProducts,
} from 'src/store/sampleData'
import ProductListingResults from './ProductListingResults'

const reducers = { search: searchReducer, userProducts: userProductsReducer }

const emptyStore = createStore(combineReducers(reducers), {
  search: searchInitialState,
  userProducts: userProductsInitialState,
})
const store = createStore(combineReducers(reducers), {
  search: {
    ...searchInitialState,
    products: sampleSearchData,
  },
  userProducts: userProductsInitialState,
})
const storeWithUserProductsFetching = createStore(combineReducers(reducers), {
  search: {
    ...searchInitialState,
    products: sampleSearchData,
  },
  userProducts: {
    ...userProductsInitialState,
    userProducts: {
      fetching: true,
      stale: true,
    },
  },
})
const storeWithUserProducts = createStore(combineReducers(reducers), {
  search: {
    ...searchInitialState,
    products: sampleSearchData,
  },
  userProducts: {
    ...userProductsInitialState,
    userProducts: {
      fetching: false,
      stale: false,
      data: { user_products: sampleUserProducts },
    },
  },
})
const storeFetching = createStore(combineReducers(reducers), {
  search: {
    ...searchInitialState,
    products: sampleSearchDataFetching,
  },
  userProducts: userProductsInitialState,
})

export default {
  title: 'organisms/ProductListingResults',
  component: ProductListingResults,
} as ComponentMeta<typeof ProductListingResults>

const Template: ComponentStory<typeof ProductListingResults> = () => (
  <ProductListingResults />
)

export const NoResults = Template.bind({})
NoResults.decorators = [
  (story) => <Provider store={emptyStore}>{story()}</Provider>,
]

export const Fetching = Template.bind({})
Fetching.decorators = [
  (story) => <Provider store={storeFetching}>{story()}</Provider>,
]

export const Results = Template.bind({})
Results.decorators = [(story) => <Provider store={store}>{story()}</Provider>]

export const UserResults = Template.bind({})
UserResults.decorators = [
  (story) => <Provider store={storeWithUserProducts}>{story()}</Provider>,
]
export const UserResultsFetching = Template.bind({})
UserResultsFetching.decorators = [
  (story) => (
    <Provider store={storeWithUserProductsFetching}>{story()}</Provider>
  ),
]
