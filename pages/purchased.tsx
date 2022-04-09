/* eslint-disable camelcase */
import produce from 'immer'
import { NextPage } from 'next'
import { NextSeo } from 'next-seo'
import Container from 'src/components/atoms/Container'
import ProductCard01 from 'src/components/molecules/ProductCard01/ProductCard01'
import Login from 'src/components/templates/Login'
import { User_Products_Type_Enum } from 'src/generated/graphql'

import { useRedirectLoggedInUsers } from 'src/hooks'
import { useAppSelector } from 'src/store'
import { selectProductsWithWishlist } from 'src/store/search'
import { selectUserProducts } from 'src/store/userProducts/userProductsSlice'

const WishlistPage: NextPage = () => {
  const products = useAppSelector(selectUserProducts)
  const wishlistedProducts = products.data?.user_products.filter(
    (item) => item.type === User_Products_Type_Enum.Wishlisted
  )

  return (
    <Container>
      <NextSeo
        title={`${products.data?.user_products.length} - Ikea clone | Karthick Ragavendran`}
        description='Create account with your email or google account.'
      />
      <div className='grid grid-cols-4 gap-4'>
        {wishlistedProducts?.map((item) => (
          <div key={item.id}>
            <ProductCard01 product={{ ...item.product, id: item.id }} />
          </div>
        ))}
      </div>
    </Container>
  )
}

export default WishlistPage
