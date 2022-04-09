import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import userReducer, {
  initialState as userInitialState,
} from 'src/store/user/userSlice'

import { combineReducers, createStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import Layout from './Layout'

const reducers = { user: userReducer }

const store = createStore(combineReducers(reducers), {
  user: userInitialState,
})

export default {
  title: 'templates/Layout',
  component: Layout,
  decorators: [(story) => <Provider store={store}>{story()}</Provider>],
} as ComponentMeta<typeof Layout>

const Template: ComponentStory<typeof Layout> = (args) => <Layout {...args} />

export const Primary = Template.bind({})
Primary.args = {
  children: (
    <div className='flex items-center justify-center italic text-gray-700 h-screen50 outline-dashed outline-gray-200'>
      Body content
    </div>
  ),
}
Primary.parameters = {}
