import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import userReducer, {
  initialState as userInitialState,
} from 'src/store/user/userSlice'
import { combineReducers, createStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import Login from './Login'

const reducers = { user: userReducer }

const store = createStore(combineReducers(reducers), {
  user: userInitialState,
})

export default {
  title: 'templates/Login',
  component: Login,
  decorators: [(story) => <Provider store={store}>{story()}</Provider>],
} as ComponentMeta<typeof Login>

const Template: ComponentStory<typeof Login> = () => <Login />

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
