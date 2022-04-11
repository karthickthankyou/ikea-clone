import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import userReducer, {
  initialState as userInitialState,
} from 'src/store/user/userSlice'
import { Provider } from 'react-redux'
import { combineReducers, createStore } from '@reduxjs/toolkit'
import PostProduct from './PostProduct'

const reducers = { user: userReducer }

const store = createStore(combineReducers(reducers), {
  user: userInitialState,
})

export default {
  title: 'templates/PostProduct',
  component: PostProduct,
  decorators: [(story) => <Provider store={store}>{story()}</Provider>],
} as ComponentMeta<typeof PostProduct>

const Template: ComponentStory<typeof PostProduct> = () => <PostProduct />

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
