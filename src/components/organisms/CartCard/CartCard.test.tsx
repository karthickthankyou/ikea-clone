/* eslint-disable camelcase */
import { mount } from '@cypress/react'
import { User_Products_Type_Enum } from 'src/generated/graphql'
import CartCard from './CartCard'

describe('CartCard Component', () => {
  it('CartCard renders', () => {
    mount(
      <CartCard
        id={0}
        src='sdf'
        title='sdf'
        description='sdf'
        price={2.99}
        buttonType={User_Products_Type_Enum.InCart}
      />
    )
  })
})
