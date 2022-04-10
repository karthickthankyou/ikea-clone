import { loadStripe } from '@stripe/stripe-js'
import { useState } from 'react'
import Button from 'src/components/atoms/Button/Button'
import Link from 'src/components/atoms/Link/Link'
import Price from 'src/components/molecules/Price/Price'
import CartCard from 'src/components/organisms/CartCard/CartCard'
import { useAppSelector } from 'src/store'
import axios from 'axios'
import { UserProductSliceType } from 'src/store/userProducts/userProductsSlice'

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
    setCreatingCheckoutSession(true)
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
    setCreatingCheckoutSession(false)
  }

  const totalPrice =
    products?.reduce((total, item) => total + item.product.price, 0) || 0

  const totalOldPrice = products?.reduce(
    (total, item) => total + (item.product.oldPrice || item.product.price),
    0
  )
  return (
    <div className={`grid grid-cols-3 gap-8 ${className}`}>
      <div className='col-span-2 space-y-8'>
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
            disabled={products?.length === 0}
            isLoading={creatingCheckoutSession}
            onClick={createCheckOutSession}
          >
            Checkout
          </Button>
        </div>
      </div>
    </div>
  )
}

export default CartTemplate
