import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import userReducer, {
  initialState as userInitialState,
} from 'src/store/user/userSlice'
import { Provider } from 'react-redux'
import { combineReducers, createStore } from '@reduxjs/toolkit'

import FormIKEAChat from './FormIKEAChat'

const reducers = { user: userReducer }

const store = createStore(combineReducers(reducers), {
  user: userInitialState,
})

export default {
  title: 'organisms/FormIKEAChat',
  component: FormIKEAChat,
} as ComponentMeta<typeof FormIKEAChat>

const Template: ComponentStory<typeof FormIKEAChat> = () => <FormIKEAChat />

export const Primary = Template.bind({})
Primary.decorators = [(story) => <Provider store={store}>{story()} </Provider>]
