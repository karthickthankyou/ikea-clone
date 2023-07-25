/* eslint-disable camelcase */
import { NextPage } from 'next'
import { NextSeo } from 'next-seo'
import Container from 'src/components/atoms/Container'
import Link from 'next/link'

import Wishlist from 'src/components/templates/Wishlist'

export const HeadingWithLink = ({
  title,
  linkText,
  linkhref,
}: {
  title: string
  linkText?: string
  linkhref?: string
}) => (
  <div className='flex items-center justify-between mt-2 mb-6'>
    <div className='text-xl font-semibold '>{title}</div>
    {linkText && <Link href={linkhref || '/'}>{linkText}</Link>}
  </div>
)

const WishlistPage: NextPage = () => {
  return (
    <Container>
      <NextSeo
        title={`${
          'Wishlist' || 'Loading...'
        } | Ikea clone | Karthick Ragavendran`}
        description='Create account with your email or google account.'
      />
      <div className='h-screen'>
        <HeadingWithLink
          title='Wishlist'
          linkText='Go to cart'
          linkhref='/cart'
        />
        <Wishlist />
      </div>
    </Container>
  )
}

export default WishlistPage
