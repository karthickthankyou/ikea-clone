import { NextPage } from 'next'
import { NextSeo } from 'next-seo'
import Container from 'src/components/atoms/Container/Container'

import { useRedirectLoggedInUsers } from 'src/hooks'

const NotFoundPage: NextPage = () => {
  useRedirectLoggedInUsers()

  return (
    <div>
      <NextSeo
        title='NotFound page - Ikea clone | Karthick Ragavendran'
        description='Create account with your email or google account.'
      />
      <div className='h-screen '>
        <Container className='flex flex-col justify-center h-full'>
          <div className='max-w-sm'>
            <div className='text-lg font-semibold'>404 | Page not found.</div>
            <div className='mt-4 text-gray-600'>
              This page is either not found or yet to be implemented.{' '}
            </div>
            <div className='mt-2 text-gray-600'>
              Meanwhile, below are the things you can do in this site right now.{' '}
            </div>
          </div>
        </Container>
      </div>
    </div>
  )
}

export default NotFoundPage
