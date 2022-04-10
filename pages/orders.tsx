/* eslint-disable camelcase */
import { NextPage } from 'next'
import { NextSeo } from 'next-seo'
import Container from 'src/components/atoms/Container'
import Link from 'src/components/atoms/Link/Link'
import ProductCard01 from 'src/components/molecules/ProductCard01/ProductCard01'
import Skeleton from 'src/components/molecules/Skeleton'
import PurchasedCard from 'src/components/organisms/PurchasedCard'
import { User_Products_Type_Enum } from 'src/generated/graphql'

import { useAppSelector } from 'src/store'
import { useGetOrderedItems } from 'src/store/userProducts/userProductsHook'
import { selectUserProducts } from 'src/store/userProducts/userProductsSlice'

const OrdersPage: NextPage = () => {
  const products = useGetOrderedItems()
  const { fetching, data } = products
  const orders = data?.orders
  const count = data?.orders_aggregate.aggregate?.count

  return (
    <Container>
      <NextSeo
        title={`${count || 'Loading...'} - Ikea clone | Karthick Ragavendran`}
        description='Create account with your email or google account.'
      />
      <div className='grid min-h-screen grid-cols-4 gap-4'>
        {fetching &&
          [1, 2, 3, 4, 5, 6].map((item) => (
            <Skeleton key={item} className='w-full h-full' />
          ))}
        {orders?.map((item) => (
          <Link href={`/products/${item.pid}`} key={item.id}>
            <PurchasedCard product={item} />
          </Link>
        ))}
      </div>
    </Container>
  )
}

export default OrdersPage
