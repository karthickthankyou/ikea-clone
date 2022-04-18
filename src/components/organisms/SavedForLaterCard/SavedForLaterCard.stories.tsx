import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Provider } from 'react-redux'
import userReducer, {
  initialState as userInitialState,
} from 'src/store/user/userSlice'
import { combineReducers, createStore } from '@reduxjs/toolkit'
import { sampleSavedForLater } from 'src/store/sampleData'
import SavedForLaterCard from './SavedForLaterCard'

const reducers = { user: userReducer }

const store = createStore(combineReducers(reducers), {
  user: userInitialState,
})

export default {
  title: 'organisms/SavedForLaterCard',
  component: SavedForLaterCard,
  decorators: [(story) => <Provider store={store}>{story()}</Provider>],
} as ComponentMeta<typeof SavedForLaterCard>

const Template: ComponentStory<typeof SavedForLaterCard> = (args) => (
  <SavedForLaterCard {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
  product: sampleSavedForLater,
}
