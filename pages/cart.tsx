/* eslint-disable camelcase */
import axios from 'axios'

import { NextPage } from 'next'
import { NextSeo } from 'next-seo'
import { useTransition, animated, config } from 'react-spring'
import Container from 'src/components/atoms/Container'
import { User_Products_Type_Enum } from 'src/generated/graphql'
import { loadStripe } from '@stripe/stripe-js'

import { useAppSelector } from 'src/store'
import { selectUserProducts } from 'src/store/userProducts/userProductsSlice'
import SavedForLaterCard from 'src/components/organisms/SavedForLaterCard/SavedForLaterCard'
import CartTemplate from 'src/components/templates/CartTemplate'
import Loading from 'src/components/molecules/Loading/Loading'
import { HeadingWithLink } from './wishlist'

const CartPage: NextPage = () => {
  const products = useAppSelector(selectUserProducts)

  const {
    data: productsData,
    fetching: productsFetching,
    error: productsError,
  } = products

  const cartProducts = productsData?.user_products.filter(
    (item) => item.type === User_Products_Type_Enum.InCart
  )

  const savedForLater = productsData?.user_products.filter(
    (item) => item.type === User_Products_Type_Enum.SavedForLater
  )

  const savedForLaterTransitions = useTransition(savedForLater || [], {
    keys: (item) => item.id,
    from: { opacity: 0, transform: 'translateY(-24px)' },
    enter: { opacity: 1, transform: 'translateY(0px)' },
    leave: { opacity: 0, transform: 'translateY(-24px)' },
    trail: 200,
    config: config.gentle,
  })

  if (products.fetching) return <Loading />

  return (
    <Container>
      <NextSeo
        title={`${products.data?.user_products.length} - Ikea clone | Karthick Ragavendran`}
        description='Create account with your email or google account.'
      />
      <HeadingWithLink
        title='Cart'
        linkText='Go to store'
        linkhref='/products'
      />
      <CartTemplate
        className='mb-12'
        products={cartProducts}
        fetching={productsFetching}
      />
      <div>
        {savedForLater && savedForLater?.length > 0 ? (
          <>
            <HeadingWithLink
              title='Saved for later'
              linkText='Go to wishlist'
              linkhref='/wishlist'
            />

            <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 '>
              {productsFetching &&
                [1, 2, 3, 4].map((item) => (
                  <div
                    className='w-full bg-gray-200 h-28 animate-pulse'
                    key={item}
                  />
                ))}
              {savedForLaterTransitions((style, item) => (
                <animated.div style={style} key={item.id}>
                  <SavedForLaterCard product={item} />
                </animated.div>
              ))}
            </div>
          </>
        ) : null}
      </div>
    </Container>
  )
}

export default CartPage
