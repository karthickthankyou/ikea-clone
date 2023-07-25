import { NextPage } from 'next'
import { NextSeo } from 'next-seo'
import { getFunctions, httpsCallable } from 'firebase/functions'

import Button from 'src/components/atoms/Button/Button'
import { useState } from 'react'
import { useAppSelector } from 'src/store'
import Container from 'src/components/atoms/Container'
import Link from 'next/link'
import Badge from 'src/components/atoms/Badge/Badge'

import { selectUid, selectUser } from 'src/store/user'
import {
  namedOperations,
  useCreateSellerMutation,
  useWhoamiQuery,
} from 'src/generated'

const GetBadge = ({
  isSeller,
  isUser,
}: {
  isSeller: boolean | undefined
  isUser: boolean | undefined
}) => {
  const text = isSeller ? 'Seller' : isUser ? 'User' : 'Unauthenticated'

  const variant = isSeller ? 'red' : isUser ? 'primary' : 'gray'
  return (
    <Badge size='sm' variant={variant}>
      {text}
    </Badge>
  )
}

const UserPage: NextPage = () => {
  const { data, loading } = useWhoamiQuery()
  const isSeller = Boolean(data?.whoami.seller?.uid)
  const isUser = Boolean(data?.whoami.uid)

  const [createSeller, { loading: creating }] = useCreateSellerMutation()

  return (
    <Container className='min-h-screen'>
      <NextSeo
        title='User page - Ikea clone | Karthick Ragavendran'
        description='Create account with your email or google account.'
      />
      <div className='flex items-center gap-2 text-lg font-semibold'>
        <div>My Account</div> <GetBadge isSeller={isSeller} isUser={isUser} />{' '}
      </div>

      <div className='font-bold'>
        ID: {data?.whoami.uid || 'Not logged in.'}
      </div>

      <div>
        {data?.whoami.uid && !isSeller && (
          <Button
            isLoading={creating}
            type='button'
            onClick={async () => {
              await createSeller({
                variables: { createSellerInput: { uid: data?.whoami.uid } },
                awaitRefetchQueries: true,
                refetchQueries: [namedOperations.Query.whoami],
              })
            }}
          >
            Become Seller
          </Button>
        )}
      </div>
      <div>
        {isSeller && (
          <Link
            className='px-4 py-2 text-white rounded-full shadow-lg hover:shadow-xl bg-primary'
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
