/* eslint-disable camelcase */
import { NextPage } from 'next'
import { NextSeo } from 'next-seo'
import Container from 'src/components/atoms/Container'
import Link from 'src/components/atoms/Link/Link'
import Loading from 'src/components/molecules/Loading/Loading'
import ProductCard01 from 'src/components/molecules/ProductCard01/ProductCard01'
import { useTransition, animated, config } from 'react-spring'
import WishlistCard from 'src/components/organisms/WishlistCard'
import { User_Products_Type_Enum } from 'src/generated/graphql'

import { useAppSelector } from 'src/store'
import { selectUserProducts } from 'src/store/userProducts/userProductsSlice'

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
  const products = useAppSelector(selectUserProducts)
  const wishlistedProducts = products.data?.user_products.filter(
    (item) => item.type === User_Products_Type_Enum.Wishlisted
  )

  const wishlistItemsTransitions = useTransition(wishlistedProducts || [], {
    keys: (item) => item.id,
    from: { opacity: 0, transform: 'translateY(24px)' },
    enter: { opacity: 1, transform: 'translateY(0px)' },
    leave: { opacity: 0, transform: 'translateY(12px)' },
    trail: 200,
    config: config.gentle,
  })

  if (products.fetching) return <Loading />
  if (wishlistedProducts?.length === 0)
    return (
      <div>
        <Container>
          <HeadingWithLink
            title='Wishlist'
            linkText='Go to cart'
            linkhref='/cart'
          />
          <div className='flex items-center justify-center h-screen80'>
            No items wishlisted
          </div>
        </Container>
      </div>
    )

  return (
    <Container>
      <NextSeo
        title={`${
          products.data?.user_products.length || 'Loading...'
        } - Ikea clone | Karthick Ragavendran`}
        description='Create account with your email or google account.'
      />
      <div className='h-screen'>
        <HeadingWithLink
          title='Wishlist'
          linkText='Go to cart'
          linkhref='/cart'
        />
        <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3'>
          {wishlistItemsTransitions((style, item) => (
            <animated.div style={style} key={item.id}>
              <WishlistCard product={item} />
            </animated.div>
          ))}
        </div>
      </div>
    </Container>
  )
}

export default WishlistPage
