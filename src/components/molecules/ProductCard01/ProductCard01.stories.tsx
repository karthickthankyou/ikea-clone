import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import userReducer, {
  initialState as userInitialState,
} from 'src/store/user/userSlice'
import { combineReducers, createStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import ProductCard01 from './ProductCard01'

const reducers = { user: userReducer }

const store = createStore(combineReducers(reducers), {
  user: userInitialState,
})

export default {
  title: 'molecules/ProductCard01',
  component: ProductCard01,
  decorators: [
    (story) => (
      <div className='max-w-xs'>
        <Provider store={store}>{story()}</Provider>
      </div>
    ),
  ],
} as ComponentMeta<typeof ProductCard01>

const Template: ComponentStory<typeof ProductCard01> = (args) => (
  <ProductCard01 {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
  title: 'BOKKREMLA',
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. At enim perspiciatis pariatur!',
  src: 'https://res.cloudinary.com/thankyou/image/upload/v1648218985/nike/ikea/sofa-01_fgsi8y.jpg',
  rating: 4.2,
  reviews: 12,
  price: 2.29,
  oldPrice: 2.99,
}

export const HugePrice = Template.bind({})
HugePrice.args = {
  title: 'BOKKREMLA',
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. At enim perspiciatis pariatur!',
  src: 'https://res.cloudinary.com/thankyou/image/upload/v1648218985/nike/ikea/sofa-01_fgsi8y.jpg',
  rating: 4.2,
  price: 100000000.99,
  oldPrice: 199999999.99,
  reviews: 12,
}

export const NoRatingAndDiscount = Template.bind({})
NoRatingAndDiscount.args = {
  title: 'BOKKREMLA',
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. At enim perspiciatis pariatur!',
  src: 'https://res.cloudinary.com/thankyou/image/upload/v1648218985/nike/ikea/sofa-01_fgsi8y.jpg',
  price: 2.29,
}

export const LineClamps = Template.bind({})
LineClamps.args = {
  title:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. At enim perspiciatis pariatur sit amet consectetur adipisicing elit. At enim perspiciatis pariatur!!',
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. At enim perspiciatis pariatur sit amet consectetur adipisicing elit. At enim perspiciatis pariatur!!',
  src: 'https://res.cloudinary.com/thankyou/image/upload/v1648218985/nike/ikea/sofa-01_fgsi8y.jpg',
  price: 2.29,
}
