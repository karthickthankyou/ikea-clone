import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { sampleSavedForLater } from 'src/store/sampleData'
import userReducer, {
  initialState as userInitialState,
} from 'src/store/user/userSlice'
import { Provider } from 'react-redux'
import { combineReducers, createStore } from '@reduxjs/toolkit'
import { produce } from 'immer'
import WishlistCard from './WishlistCard'

const reducers = { user: userReducer }

const store = createStore(combineReducers(reducers), {
  user: userInitialState,
})

export default {
  title: 'organisms/WishlistCard',
  component: WishlistCard,
} as ComponentMeta<typeof WishlistCard>

const Template: ComponentStory<typeof WishlistCard> = (args) => (
  <WishlistCard {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
  product: sampleSavedForLater,
}
Primary.decorators = [(story) => <Provider store={store}>{story()}</Provider>]
