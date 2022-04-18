/* eslint-disable camelcase */
import { NextPage } from 'next'
import { NextSeo } from 'next-seo'
import Container from 'src/components/atoms/Container'
import Link from 'src/components/atoms/Link/Link'
import Skeleton from 'src/components/molecules/Skeleton'

import { useGetSupport } from 'src/store/userProducts/userProductsHook'
import TripGuide from 'src/components/organisms/TripGuide/TripGuide'
import { formatDate } from 'lib/client'

const SupportPage: NextPage = () => {
  const products = useGetSupport()
  const { fetching, data } = products
  const orders = data?.support
  const count = data?.support_aggregate.aggregate?.count

  if (orders?.length === 0)
    return (
      <div className='items-center justify-center h-screen80'>
        No messages found.
      </div>
    )

  return (
    <div className='min-h-screen'>
      <Container>
        <NextSeo
          title={`${count || 'Loading...'} - Ikea clone | Karthick Ragavendran`}
          description='Create account with your email or google account.'
        />
        <div className='mb-4 text-lg font-semibold'>Support messages</div>
        <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3'>
          {fetching &&
            [1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <Skeleton key={item} className='w-full h-36' />
            ))}
          {!orders ||
            (orders?.length === 0 && (
              <div>
                <div>No results.</div>
                <Link href='/products' className='underline underline-offset-4'>
                  Go to store.
                </Link>
              </div>
            ))}
          {orders?.map((item) => (
            <div key={item.id} className='flex flex-col overflow-hidden'>
              <div className='mt-1 text-xs text-gray'>
                {formatDate(item.updated_at)}
              </div>
              <div className='mt-1 text-lg font-medium line-clamp-3'>
                {item.message}
              </div>
              <div className='mt-auto text-xs text-gray line-clamp-2'>
                {item.category}
              </div>
            </div>
          ))}
        </div>
      </Container>
      <div className='my-12 bg-gray-25'>
        <Container>
          <div className='pt-12 mb-2 text-xl font-semibold'>Are you lost?</div>
          <div className='text-sm'>
            Use this trip guide to navigate to different parts of this
            application.{' '}
          </div>
          <TripGuide currentPageName='Support' />
        </Container>
      </div>
    </div>
  )
}

export default SupportPage
