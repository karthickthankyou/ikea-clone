/* eslint-disable camelcase */
import axios from 'axios'

import { NextPage } from 'next'
import { NextSeo } from 'next-seo'
import { useRouter } from 'next/router'
import Container from 'src/components/atoms/Container'
import { User_Products_Type_Enum } from 'src/generated/graphql'
import { loadStripe } from '@stripe/stripe-js'

import { useAppSelector } from 'src/store'
import { selectUserProducts } from 'src/store/userProducts/userProductsSlice'
import SavedForLaterCard from 'src/components/organisms/SavedForLaterCard/SavedForLaterCard'
import CartTemplate from 'src/components/templates/CartTemplate'

const CartPage: NextPage = () => {
  const products = useAppSelector(selectUserProducts)
  const uid = useAppSelector((state) => state.user.data.user?.uid)
  const router = useRouter()
  const { status } = router.query

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

  return (
    <Container>
      <NextSeo
        title={`${products.data?.user_products.length} - Ikea clone | Karthick Ragavendran`}
        description='Create account with your email or google account.'
      />
      <div className='mt-2 mb-4 text-xl font-semibold'>Cart</div>
      <CartTemplate
        className='mb-12'
        products={cartProducts}
        fetching={productsFetching}
      />
      <div>
        {savedForLater && savedForLater?.length > 0 ? (
          <>
            <div className='mt-2 mb-4 text-xl font-semibold'>
              Saved for later
            </div>
            <div className='grid grid-cols-2 gap-8 lg:grid-cols-3 '>
              {productsFetching &&
                [1, 2, 3, 4].map((item) => (
                  <div
                    className='w-full bg-gray-200 h-28 animate-pulse'
                    key={item}
                  />
                ))}
              {savedForLater?.map((item) => (
                <SavedForLaterCard key={item.id} product={item} />
              ))}
            </div>
          </>
        ) : null}
      </div>
    </Container>
  )
}

export default CartPage
