/* eslint-disable camelcase */

import { NextPage } from 'next'
import { NextSeo } from 'next-seo'
import Container from 'src/components/atoms/Container'

import CartTemplate from 'src/components/templates/CartTemplate'
import { HeadingWithLink } from './wishlist'
import SaveForLater from 'src/components/templates/SaveForLater'

const CartPage: NextPage = () => {
  return (
    <Container>
      <NextSeo
        title={`Cart | Ikea clone | Karthick Ragavendran`}
        description='Create account with your email or google account.'
      />
      <HeadingWithLink
        title='Cart'
        linkText='Go to store'
        linkhref='/products'
      />
      <CartTemplate />
      <SaveForLater />
    </Container>
  )
}

export default CartPage
