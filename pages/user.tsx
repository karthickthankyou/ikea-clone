import { NextPage } from 'next'
import { NextSeo } from 'next-seo'
import { getFunctions, httpsCallable } from 'firebase/functions'

import Button from 'src/components/atoms/Button/Button'
import { useState } from 'react'
import { useAppSelector } from 'src/store'
import Container from 'src/components/atoms/Container'
import Link from 'src/components/atoms/Link/Link'
import Badge from 'src/components/atoms/Badge/Badge'
import { NIL } from 'uuid'

const GetBadge = ({
  isSeller,
  isUser,
}: {
  isSeller: boolean | undefined
  isUser: boolean | undefined
}) => {
  // eslint-disable-next-line no-nested-ternary
  const text = isSeller ? 'Seller' : isUser ? 'User' : 'Unauthenticated'
  // eslint-disable-next-line no-nested-ternary
  const variant = isSeller ? 'red' : isUser ? 'primary' : 'gray'
  return (
    <Badge size='sm' variant={variant}>
      {text}
    </Badge>
  )
}

const UserPage: NextPage = () => {
  const uid = useAppSelector((state) => state.user.data.user?.uid)

  const [becoming, setBecoming] = useState(false)
  const becomeSellerForIkeaClick = () => {
    setBecoming(true)
    const functions = getFunctions()
    const becomeSellerForIkea = httpsCallable(functions, 'becomeSellerForIkea')
    becomeSellerForIkea().then((result) => {
      // Read result of the Cloud Function.
      /** @type {any} */
      const { data } = result
      // eslint-disable-next-line no-console
      setBecoming(false)
    })
  }

  const claims = useAppSelector((state) => state.user.data.claims)
  const roles = claims?.['x-hasura-allowed-roles']

  const isSeller = roles?.includes('seller')
  const isUser = roles?.includes('user')

  return (
    <Container className='min-h-screen'>
      <NextSeo
        title='User page - Ikea clone | Karthick Ragavendran'
        description='Create account with your email or google account.'
      />
      <div className='flex items-center gap-2 text-lg font-semibold'>
        <div>My Account</div> <GetBadge isSeller={isSeller} isUser={isUser} />{' '}
      </div>

      <div className='font-bold'>ID: {uid || 'Not logged in.'}</div>
      <div className='mt-8 mb-12'>
        <div className='mb-2 font-semibold'>Roles</div>
        {!uid || roles?.length === 0 ? (
          <div>No roles assigned.</div>
        ) : (
          <div className='flex gap-2 mb-2'>
            {roles?.map((item) => (
              <div
                className='inline-block px-2 py-1 border-2 border-white bg-primary/10 hover:shadow-xl'
                key={item}
              >
                {item}
              </div>
            ))}
          </div>
        )}
      </div>
      <div>
        {isUser && !isSeller && (
          <Button
            isLoading={becoming}
            type='button'
            onClick={becomeSellerForIkeaClick}
          >
            Become Agent
          </Button>
        )}
      </div>
      <div>
        {isSeller && (
          <Link
            className='px-4 py-2 text-white shadow-lg hover:shadow-xl bg-primary'
            href='/products/new'
          >
            Post a product
          </Link>
        )}
      </div>
      <div className='py-2 mt-6 mb-2'>
        {!isUser ? (
          <Link href='/login' className='px-4 py-2 text-white bg-primary'>
            Go to login page
          </Link>
        ) : null}
      </div>
    </Container>
  )
}

export default UserPage
