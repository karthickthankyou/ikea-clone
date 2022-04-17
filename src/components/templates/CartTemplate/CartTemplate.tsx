import { loadStripe } from '@stripe/stripe-js'
import { useState } from 'react'
import Button from 'src/components/atoms/Button/Button'
import Price from 'src/components/molecules/Price/Price'
import CartCard from 'src/components/organisms/CartCard/CartCard'
import { useAppSelector } from 'src/store'
import axios from 'axios'
import { UserProductSliceType } from 'src/store/userProducts/userProductsSlice'
import Link from 'src/components/atoms/Link/Link'
import { notify } from 'src/hooks'
import { MINIMUM_TOTAL } from 'src/store/static'

export interface ICartTemplateProps {
  products:
    | Required<UserProductSliceType['userProducts']>['data']['user_products']
    | undefined
  fetching?: boolean
  className?: string
}

const CartTemplate = ({
  products,
  fetching = false,
  className,
}: ICartTemplateProps) => {
  const [creatingCheckoutSession, setCreatingCheckoutSession] = useState(false)
  const uid = useAppSelector((state) => state.user.data.user?.uid)

  const transformedCart = products?.map((item) => ({
    id: item.pid,
    name: item.product.name,
    description: item.product.category + item.product.subCategory,
    image:
      (item.product.images && item.product.images[0]) ||
      'https://res.cloudinary.com/thankyou/image/upload/v1648563867/zillow-clone/ul7h0tcrtl3bycfd8za1.jpg',
    price: Math.round(item.product.price * 100),
  }))

  const publishableKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY

  const stripePromise = loadStripe(publishableKey || '')
  const createCheckOutSession = async () => {
    setCreatingCheckoutSession(true)
    const stripe = await stripePromise
    const checkoutSession = await axios.post('/api/create-stripe-session', {
      items: transformedCart,
      uid,
    })
    const result = await stripe?.redirectToCheckout({
      sessionId: checkoutSession.data.id,
    })

    console.log('result: ', result)
    if (result?.error) {
      notify({
        message:
          result.error.message || 'Something went wrong. Please try again.',
        type: 'error',
      })
    }
    setCreatingCheckoutSession(false)
  }

  const totalPrice =
    products?.reduce((total, item) => total + item.product.price, 0) || 0

  const totalOldPrice = products?.reduce(
    (total, item) => total + (item.product.oldPrice || item.product.price),
    0
  )

  if (products?.length === 0) {
    return (
      <div>
        <div className='text-lg font-bold'>Cart is empty.</div>
        <Link href='/products' className='mt-2 text-primary'>
          Go to store
        </Link>
      </div>
    )
  }
  return (
    <div
      className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 ${className}`}
    >
      <div className='col-span-1 space-y-8 md:col-span-2'>
        {fetching &&
          [1, 2, 3, 4].map((item) => (
            <div className='w-full bg-gray-200 h-28 animate-pulse' key={item} />
          ))}
        {products?.map((item) => (
          <CartCard product={item} key={item.id} />
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
            disabled={products?.length === 0 || totalPrice < MINIMUM_TOTAL}
            isLoading={creatingCheckoutSession}
            onClick={createCheckOutSession}
            className='disabled:bg-gray'
          >
            Checkout
          </Button>
          {(products?.length || 0) > 0 && totalPrice < MINIMUM_TOTAL && (
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
