/* eslint-disable camelcase */
import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import userReducer, {
  initialState as userInitialState,
} from 'src/store/user/userSlice'
import { combineReducers, createStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import { User_Products_Type_Enum } from 'src/generated/graphql'
import CartCard from './CartCard'

const reducers = { user: userReducer }

const store = createStore(combineReducers(reducers), {
  user: userInitialState,
})

export default {
  title: 'molecules/CartCard',
  component: CartCard,
  decorators: [
    (story) => (
      <div className='max-w-sm'>
        <Provider store={store}>{story()}</Provider>
      </div>
    ),
  ],
} as ComponentMeta<typeof CartCard>

const Template: ComponentStory<typeof CartCard> = (args) => (
  <CartCard {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
  id: 1,
  title: 'BOKKREMLA',
  description: 'Desk, white',
  price: 2.29,
  buttonType: User_Products_Type_Enum.InCart,
  src: 'https://res.cloudinary.com/thankyou/image/upload/v1648218985/nike/ikea/sofa-01_fgsi8y.jpg',
}
