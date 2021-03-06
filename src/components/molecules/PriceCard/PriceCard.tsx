/* eslint-disable camelcase */
import InformationCircleIcon from '@heroicons/react/outline/InformationCircleIcon'
import ShoppingCartIcon from '@heroicons/react/solid/ShoppingCartIcon'
import Tooltip from 'src/components/atoms/Tooltip'
import Button from 'src/components/atoms/Button/Button'
import { useRouter } from 'next/router'

import {
  useInsertUserProductsOneMutation,
  User_Products_Type_Enum,
} from 'src/generated/graphql'
import { useAppSelector } from 'src/store'
import Link from 'src/components/atoms/Link/Link'
import { ProductWithWishlist } from 'src/store/search'
import Price from '../Price/Price'
import Rating from '../Rating'
import Loading from '../Loading/Loading'

export interface IPriceCardProps {
  product: ProductWithWishlist | undefined | null
}

const PriceCard = ({ product }: IPriceCardProps) => {
  const [{ fetching, data, error }, AddProductToCart] =
    useInsertUserProductsOneMutation()
  const router = useRouter()

  const uid = useAppSelector((state) => state.user.data.user?.uid)
  const cartItems = useAppSelector(
    (state) => state.userProducts.userProducts.data?.user_products
  )?.filter((item) => item.type === User_Products_Type_Enum.InCart)

  if (fetching) return <Loading />
  if (!product) return <div>Product not found.</div>
  const {
    rating,
    reviews,
    name,
    category,
    subCategory,
    outOfStock,
    price,
    oldPrice,
    id,
  } = product
  const inCart = cartItems?.map((item) => item.pid).includes(id)

  return (
    <div className='max-w-lg'>
      <div>
        <div className='text-3xl font-bold'>{name}</div>
        <div className='text-lg font-light'>{category}</div>
      </div>
      <Price
        showTaxComment
        className='mt-8'
        price={price}
        oldPrice={oldPrice}
      />

      {rating && (
        <Rating
          rating={rating}
          size='medium'
          color='black'
          className='mt-4'
          reviews={reviews}
        />
      )}
      {outOfStock && (
        <div className='mt-4 text-sm text-gray-600'>
          Product not in stock.
          <Tooltip
            placement='top'
            arrow
            text='white'
            bg='black'
            title='Even if the product is in stock, we(I) can not serve you as this is just a portfolio project?'
          >
            <InformationCircleIcon className='inline w-4 h-4 ml-2' />
          </Tooltip>
        </div>
      )}
      <Button
        size='lg'
        disabled={Boolean(outOfStock) || inCart}
        isLoading={fetching}
        className='flex items-center gap-2 mt-8'
        onClick={() => {
          if (!uid) {
            router.push('/login')
            return
          }

          AddProductToCart({
            object: {
              pid: id,
              uid,
              type: User_Products_Type_Enum.InCart,
            },
          })
        }}
      >
        <ShoppingCartIcon className='w-5 h-5 text-white' />
        {inCart ? 'In cart' : 'Add to shopping cart'}
      </Button>
      {inCart && (
        <Link href='/cart' className='inline-block mt-4 text-gray-600'>
          Go to cart
        </Link>
      )}
    </div>
  )
}

export default PriceCard
