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
import {
  NoResults,
  Fetching,
  Results,
  UserResults,
  UserResultsFetching,
} from 'src/components/organisms/ProductListingResults/ProductListingResults.stories'

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

const Template: ComponentStory<typeof ProductListing> = (args) => (
  <ProductListing {...args} />
)

export const NoResultsPage = Template.bind({})
NoResultsPage.decorators = NoResults.decorators

export const FetchingPage = Template.bind({})
FetchingPage.decorators = Fetching.decorators

export const ResultsPage = Template.bind({})
ResultsPage.decorators = Results.decorators

export const UserResultsFetchingPage = Template.bind({})
UserResultsFetchingPage.decorators = UserResultsFetching.decorators

export const UserResultsPage = Template.bind({})
UserResultsPage.decorators = UserResults.decorators

export const WithSidebarOpen = Template.bind({})
WithSidebarOpen.args = { filterOpen: true }
WithSidebarOpen.decorators = UserResults.decorators
