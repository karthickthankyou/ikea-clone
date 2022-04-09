/* eslint-disable camelcase */
import axios from 'axios'

import { NextPage } from 'next'
import { NextSeo } from 'next-seo'
import { useRouter } from 'next/router'
import { useState } from 'react'
import Container from 'src/components/atoms/Container'
import Link from 'src/components/atoms/Link'
import CartCard from 'src/components/organisms/CartCard/CartCard'
import { User_Products_Type_Enum } from 'src/generated/graphql'
import { loadStripe } from '@stripe/stripe-js'

import { useAppSelector } from 'src/store'
import { selectUserProducts } from 'src/store/userProducts/userProductsSlice'
import Button from 'src/components/atoms/Button/Button'

const CartPage: NextPage = () => {
  const products = useAppSelector(selectUserProducts)
  const uid = useAppSelector((state) => state.user.data.user?.uid)
  const router = useRouter()
  const { status } = router.query

  const [loading, setLoading] = useState(false)
  const cartProducts = products.data?.user_products.filter(
    (item) => item.type === User_Products_Type_Enum.InCart
  )
  const savedForLater = products.data?.user_products.filter(
    (item) => item.type === User_Products_Type_Enum.SavedForLater
  )

  const transformedCart = cartProducts?.map((item) => ({
    id: item.id,
    name: item.product.name,
    description: item.product.category + item.product.subCategory,
    image:
      'https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80',
    price: Math.round(item.product.price * 100),
  }))

  const publishableKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY

  const stripePromise = loadStripe(publishableKey || '')
  const createCheckOutSession = async () => {
    setLoading(true)
    const stripe = await stripePromise
    const checkoutSession = await axios.post('/api/create-stripe-session', {
      items: transformedCart,
      uid,
    })
    const result = await stripe?.redirectToCheckout({
      sessionId: checkoutSession.data.id,
    })
    if (result?.error) {
      alert(result.error.message)
    }
    setLoading(false)
  }

  return (
    <Container>
      <NextSeo
        title={`${products.data?.user_products.length} - Ikea clone | Karthick Ragavendran`}
        description='Create account with your email or google account.'
      />
      <div className='mt-2 mb-4 text-2xl'>Cart</div>
      <div className='flex flex-col gap-8 '>
        {cartProducts?.map((item) => (
          <CartCard
            buttonType={User_Products_Type_Enum.SavedForLater}
            id={item.pid}
            key={item.id}
            title={item.product.name}
            price={item.product.price}
            description={item.product.category}
            src='https://res.cloudinary.com/thankyou/image/upload/v1648670456/IKEA/katrin-hauf-gdUxNykbuZc-unsplash_da0eol.jpg'
          />
        ))}
      </div>

      <Button onClick={createCheckOutSession}>Checkout</Button>

      <Link href='/products' className='inline-block mt-4'>
        Shop more
      </Link>
      <div className='mt-2 mb-4 text-2xl'>Saved for later</div>
      <div className='flex flex-col gap-8 '>
        {savedForLater?.map((item) => (
          <CartCard
            buttonType={User_Products_Type_Enum.InCart}
            id={item.pid}
            key={item.id}
            title={item.product.name}
            price={item.product.price}
            description={item.product.category}
            src='https://res.cloudinary.com/thankyou/image/upload/v1648670456/IKEA/katrin-hauf-gdUxNykbuZc-unsplash_da0eol.jpg'
          />
        ))}
      </div>
    </Container>
  )
}

export default CartPage
