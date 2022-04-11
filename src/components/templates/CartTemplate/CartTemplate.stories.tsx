import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import userReducer, {
  initialState as userInitialState,
} from 'src/store/user/userSlice'
import { Provider } from 'react-redux'
import { combineReducers, createStore } from '@reduxjs/toolkit'
import { sampleCartData } from 'src/store/sampleData'
import CartTemplate from './CartTemplate'

const reducers = { user: userReducer }

const store = createStore(combineReducers(reducers), {
  user: userInitialState,
})

export default {
  title: 'templates/CartTemplate',
  component: CartTemplate,
  decorators: [(story) => <Provider store={store}>{story()}</Provider>],
} as ComponentMeta<typeof CartTemplate>

const Template: ComponentStory<typeof CartTemplate> = (args) => (
  <CartTemplate {...args} />
)

export const NoResults = Template.bind({})
NoResults.args = {
  products: [],
}

export const Primary = Template.bind({})
Primary.args = {
  products: sampleCartData,
}
