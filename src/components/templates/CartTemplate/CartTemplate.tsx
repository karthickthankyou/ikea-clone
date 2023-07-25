import { loadStripe } from '@stripe/stripe-js'
import { useEffect, useState } from 'react'
import Button from 'src/components/atoms/Button/Button'
import Price from 'src/components/molecules/Price/Price'
import CartCard from 'src/components/organisms/CartCard/CartCard'
import { useTransition, animated, config } from 'react-spring'
import { useAppSelector } from 'src/store'
import axios from 'axios'

import { notify } from 'src/hooks'
import { MINIMUM_TOTAL } from 'src/store/static'
import { selectUid } from 'src/store/user'
import { UserProductStatus, useMyUserProductsLazyQuery } from 'src/generated'

export interface ICartTemplateProps {
  className?: string
}

const CartTemplate = ({ className }: ICartTemplateProps) => {
  const [getCartitems, { data, loading }] = useMyUserProductsLazyQuery()
  const uid = useAppSelector(selectUid)

  useEffect(() => {
    if (uid) {
      getCartitems({
        variables: {
          where: {
            status: { equals: UserProductStatus.InCart },
            uid: { equals: uid },
          },
        },
      })
    }
  }, [getCartitems, uid])
  const [creatingCheckoutSession, setCreatingCheckoutSession] = useState(false)

  const cartItemsTransitions = useTransition(data?.myUserProducts || [], {
    keys: (item) => item.id,
    from: {
      opacity: 0,
      height: 80,
      transform: 'translateX(-24px) skewX(6deg)',
    },
    enter: { opacity: 1, transform: 'translateX(0px) skewX(0deg)' },
    leave: { opacity: 0, transform: 'translateX(24px) skewX(-6deg)' },
    trail: 200,
    config: config.gentle,
  })

  const transformedCartItems = data?.myUserProducts?.map((item) => ({
    id: item.pid,
    name: item.product.name,
    image:
      (item.product.images && item.product.images[0]) ||
      'https://res.cloudinary.com/thankyou/image/upload/v1648563867/zillow-clone/ul7h0tcrtl3bycfd8za1.jpg',
    price: Math.round(item.product.price * 100),
  }))

  const publishableKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY

  const stripePromise = loadStripe(publishableKey || '')
  const createCheckOutSession = async () => {
    setCreatingCheckoutSession(true)
    const res = await createBookingSession(uid!, transformedCartItems || [])
    setCreatingCheckoutSession(false)
  }

  const totalPrice =
    data?.myUserProducts?.reduce(
      (total, item) => total + item.product.price,
      0
    ) || 0

  const totalOldPrice = data?.myUserProducts?.reduce(
    (total, item) => total + (item.product.oldPrice || item.product.price),
    0
  )

  if (data?.myUserProducts?.length === 0) {
    return (
      <div className='flex flex-col items-center justify-center h-screen50'>
        <div className='text-lg font-bold'>Cart is empty.</div>
      </div>
    )
  }
  return (
    <div
      className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 min-h-screen50 gap-8 ${className}`}
    >
      <div className='col-span-1 space-y-8 md:col-span-2'>
        {loading &&
          [1, 2, 3, 4].map((item) => (
            <div className='w-full bg-gray-200 h-28 animate-pulse' key={item} />
          ))}
        {cartItemsTransitions((style, item) => (
          <animated.div style={style}>
            <CartCard product={item} />
          </animated.div>
        ))}
      </div>
      <div>
        <div className='sticky top-0'>
          <div className='text-lg font-semibold leading-none'>Cart summary</div>
          <div className='flex justify-between mt-4 mb-2'>
            <div className='text-lg font-bold'>Total:</div>
            <Price price={totalPrice} oldPrice={totalOldPrice} />
          </div>
          <Button
            fullWidth
            size='xl'
            disabled={
              data?.myUserProducts?.length === 0 || totalPrice < MINIMUM_TOTAL
            }
            isLoading={creatingCheckoutSession}
            onClick={createCheckOutSession}
            className='mt-4 disabled:bg-gray'
          >
            Checkout
          </Button>
          {(data?.myUserProducts?.length || 0) > 0 &&
            totalPrice < MINIMUM_TOTAL && (
              <div className='flex items-center gap-2 mt-2 text-sm text-red-700'>
                Minimum checkout price:{' '}
                <Price price={MINIMUM_TOTAL} className='inline' />
              </div>
            )}
        </div>
      </div>
    </div>
  )
}

export default CartTemplate

type CartItems = {
  id: number
  name: string
  image: string
  price: number
}[]

export const createBookingSession = async (uid: string, items: CartItems) => {
  const checkoutSession = await axios.post(
    process.env.NEXT_PUBLIC_API_URL + '/stripe',
    {
      items,
      uid,
    }
  )

  const publishableKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY

  const stripePromise = loadStripe(publishableKey || '')
  const stripe = await stripePromise
  const result = await stripe?.redirectToCheckout({
    sessionId: checkoutSession.data.sessionId,
  })

  return result
}
