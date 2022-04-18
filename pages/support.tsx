/* eslint-disable camelcase */
import { NextPage } from 'next'
import { NextSeo } from 'next-seo'
import Container from 'src/components/atoms/Container'
import Link from 'src/components/atoms/Link/Link'
import Skeleton from 'src/components/molecules/Skeleton'
import { useTransition, animated, config } from 'react-spring'
import { useGetSupport } from 'src/store/userProducts/userProductsHook'
import TripGuide from 'src/components/organisms/TripGuide/TripGuide'
import { formatDate } from 'lib/client'

const SupportPage: NextPage = () => {
  const products = useGetSupport()
  const { fetching, data } = products
  const messages = data?.support
  const messagesTransitions = useTransition(messages || [], {
    keys: (item) => item.id,
    from: { opacity: 0, transform: 'translateY(24px) skew(12deg)' },
    enter: { opacity: 1, transform: 'translateY(0px) skew(0deg)' },
    leave: { opacity: 0, transform: 'translateY(12px) skew(12deg)' },
    trail: 200,
    config: config.gentle,
  })
  const count = data?.support_aggregate.aggregate?.count

  if (messages?.length === 0)
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
          {!messages ||
            (messages?.length === 0 && (
              <div>
                <div>No results.</div>
                <Link href='/products' className='underline underline-offset-4'>
                  Go to store.
                </Link>
              </div>
            ))}
          {messagesTransitions((style, item) => (
            <animated.div
              style={style}
              className='flex flex-col overflow-hidden'
            >
              <div className='mt-1 text-xs text-gray'>
                {formatDate(item.updated_at)}
              </div>
              <div className='mt-1 text-lg font-medium line-clamp-3'>
                {item.message}
              </div>
              <div className='mt-auto text-xs text-gray line-clamp-2'>
                {item.category}
              </div>
            </animated.div>
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
