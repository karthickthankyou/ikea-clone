import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Provider } from 'react-redux'
import userReducer, {
  initialState as userInitialState,
} from 'src/store/user/userSlice'
import { combineReducers, createStore } from '@reduxjs/toolkit'
import Navbar from './Navbar'

const reducers = { user: userReducer }

const store = createStore(combineReducers(reducers), {
  user: userInitialState,
})

export default {
  title: 'organisms/Navbar',
  component: Navbar,
  decorators: [(story) => <Provider store={store}>{story()}</Provider>],
} as ComponentMeta<typeof Navbar>

const Template: ComponentStory<typeof Navbar> = () => <Navbar />

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
