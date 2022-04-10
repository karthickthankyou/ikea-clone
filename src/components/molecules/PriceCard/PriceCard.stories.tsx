import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Provider } from 'react-redux'
import { combineReducers, createStore } from '@reduxjs/toolkit'
import userReducer, {
  initialState as userInitialState,
} from 'src/store/user/userSlice'
import userProductsReducer, {
  initialState as userProductsInitialData,
} from 'src/store/userProducts/userProductsSlice'
import PriceCard from './PriceCard'

export default {
  title: 'molecules/PriceCard',
  component: PriceCard,
} as ComponentMeta<typeof PriceCard>

const Template: ComponentStory<typeof PriceCard> = (args) => (
  <PriceCard {...args} />
)

const reducers = { user: userReducer, userProducts: userProductsReducer }

const store = createStore(combineReducers(reducers), {
  user: userInitialState,
  userProducts: userProductsInitialData,
})

export const Primary = Template.bind({})
Primary.args = {
  product: {
    id: 12,
    subCategory: 'Bench',
    name: 'MICKE',
    category: 'Desk, white',
    price: 7990,
    oldPrice: 9000,
  },
}
Primary.parameters = {}
Primary.decorators = [(story) => <Provider store={store}>{story()}</Provider>]
