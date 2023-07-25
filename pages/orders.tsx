/* eslint-disable camelcase */
import { NextPage } from 'next'
import { NextSeo } from 'next-seo'
import Container from 'src/components/atoms/Container'
import Link from 'next/link'
import Skeleton from 'src/components/molecules/Skeleton'
import { useTransition, animated, config } from 'react-spring'
import PurchasedCard from 'src/components/organisms/PurchasedCard'

import { HeadingWithLink } from './wishlist'
import { useMyOrdersLazyQuery } from 'src/generated'
import { useEffect } from 'react'
import { useAppSelector } from 'src/store'
import { selectUid } from 'src/store/user'

const OrdersPage: NextPage = () => {
  const [getMyOrders, { data, loading }] = useMyOrdersLazyQuery()
  const uid = useAppSelector(selectUid)
  useEffect(() => {
    if (uid) {
      getMyOrders({ variables: {} })
    }
  }, [getMyOrders, uid])
  const ordersTransitions = useTransition(data?.myOrders || [], {
    keys: (item) => item.id,
    from: { opacity: 0, transform: 'translateY(-24px) skewY(3deg)' },
    enter: { opacity: 1, transform: 'translateY(0px) skewY(0deg)' },
    leave: { opacity: 0, transform: 'translateY(-24px)' },
    trail: 200,
    config: config.gentle,
  })

  const count = data?.orderAggregate.count

  return (
    <Container>
      <NextSeo
        title={`${count || 'Loading...'} - Ikea clone | Karthick Ragavendran`}
        description='Create account with your email or google account.'
      />
      <HeadingWithLink
        title='Purchased items'
        linkText='Go to store'
        linkhref='/products'
      />
      <div className='grid min-h-screen grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4'>
        {loading &&
          [1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
            <Skeleton key={item} className='w-full h-full' />
          ))}
        {!data?.myOrders ||
          (data?.myOrders?.length === 0 && (
            <div>
              <div>No results.</div>
              <Link href='/products' className='underline underline-offset-4'>
                Go to store.
              </Link>
            </div>
          ))}
        {ordersTransitions((style, item) => (
          <animated.div style={style}>
            <Link href={`/products/${item.pid}`} key={item.id}>
              <PurchasedCard product={item} />
            </Link>
          </animated.div>
        ))}
      </div>
    </Container>
  )
}

export default OrdersPage
