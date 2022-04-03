/* eslint-disable camelcase */
import produce from 'immer'
import { NextPage } from 'next'
import { NextSeo } from 'next-seo'
import Container from 'src/components/atoms/Container'
import Link from 'src/components/atoms/Link'
import ProductCard01 from 'src/components/molecules/ProductCard01/ProductCard01'
import CartCard from 'src/components/organisms/CartCard/CartCard'
import Login from 'src/components/templates/Login'
import { User_Products_Type_Enum } from 'src/generated/graphql'

import { useRedirectLoggedInUsers } from 'src/hooks'
import { useAppSelector } from 'src/store'
import { selectProductsWithWishlist } from 'src/store/search'
import { selectUserProducts } from 'src/store/userProducts/userProductsSlice'

const WishlistPage: NextPage = () => {
  const products = useAppSelector(selectUserProducts)
  const cartProducts = products.data?.user_products.filter(
    (item) => item.type === User_Products_Type_Enum.InCart
  )
  const savedForLater = products.data?.user_products.filter(
    (item) => item.type === User_Products_Type_Enum.SavedForLater
  )

  return (
    <Container>
      <NextSeo
        title={`${products.data?.user_products.length} - Ikea clone | Karthick Ragavendran`}
        description='Create account with your email or google account.'
      />
      <div className='mt-2 mb-4 text-2xl'>Cart</div>
      <div className='flex flex-col gap-8 '>
        {cartProducts?.map((item) => (
          <CartCard
            buttonType={User_Products_Type_Enum.SavedForLater}
            id={item.pid}
            key={item.id}
            title={item.product.name}
            price={item.product.price}
            description={item.product.category}
            src='https://res.cloudinary.com/thankyou/image/upload/v1648670456/IKEA/katrin-hauf-gdUxNykbuZc-unsplash_da0eol.jpg'
          />
        ))}
      </div>
      <Link href='/products' className='inline-block mt-4'>
        Shop more
      </Link>
      <div className='mt-2 mb-4 text-2xl'>Saved for later</div>
      <div className='flex flex-col gap-8 '>
        {savedForLater?.map((item) => (
          <CartCard
            buttonType={User_Products_Type_Enum.InCart}
            id={item.pid}
            key={item.id}
            title={item.product.name}
            price={item.product.price}
            description={item.product.category}
            src='https://res.cloudinary.com/thankyou/image/upload/v1648670456/IKEA/katrin-hauf-gdUxNykbuZc-unsplash_da0eol.jpg'
          />
        ))}
      </div>
    </Container>
  )
}

export default WishlistPage
