import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import userReducer, {
  initialState as userInitialState,
} from 'src/store/user/userSlice'
import { Provider } from 'react-redux'
import { combineReducers, createStore } from '@reduxjs/toolkit'
import Home from './Home'

const reducers = { user: userReducer }

const store = createStore(combineReducers(reducers), {
  user: userInitialState,
})

export default {
  title: 'templates/Home',
  component: Home,
  decorators: [(story) => <Provider store={store}>{story()}</Provider>],
} as ComponentMeta<typeof Home>

const Template: ComponentStory<typeof Home> = (args) => <Home {...args} />

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
