/* eslint-disable camelcase */
import Button from 'src/components/atoms/Button/Button'
import Image from 'src/components/atoms/Image'
import Price from 'src/components/molecules/Price/Price'
import {
  useInsertUserProductsOneMutation,
  User_Products_Type_Enum,
} from 'src/generated/graphql'
import { useAppSelector } from 'src/store'
import { UserProductSliceType } from 'src/store/userProducts/userProductsSlice'
import Link from 'src/components/atoms/Link/Link'
import { formatDate } from 'lib/client'

type UserProductsData = Required<UserProductSliceType['userProducts']>['data']

export interface IWishlistCardProps {
  product: UserProductsData['user_products'][number]
}

const WishlistCard = ({ product }: IWishlistCardProps) => {
  const {
    pid,
    updatedAt,
    product: {
      category,
      subCategory,
      name,
      price,
      oldPrice,
      outOfStock,
      images,
    },
  } = product
  const [{ fetching: movingToCart, data, error }, insertUserProduct] =
    useInsertUserProductsOneMutation()
  const uid = useAppSelector((state) => state.user.data.user?.uid)
  return (
    <div className='flex'>
      <Link
        href={`/products/${pid}`}
        className='relative flex-shrink-0 w-40 h-48 mr-2'
      >
        <Image
          src={images && images[0]}
          alt=''
          layout='fill'
          className='transition-transform hover:scale-105'
        />
      </Link>
      <div className='flex flex-col flex-grow'>
        <div className='font-medium line-clamp-3'>{name}</div>
        <div className='mt-1 text-sm text-gray-600'>
          {category} {subCategory}
        </div>
        <Price price={price} oldPrice={oldPrice} className='mt-2' />
        {outOfStock && <div className='text-red'>Out of stock</div>}
        {!outOfStock && (
          <div className='mt-2'>
            <Button
              variant='text'
              className='hover:underline underline-offset-4'
              isLoading={movingToCart}
              disabled={Boolean(outOfStock)}
              onClick={() =>
                insertUserProduct({
                  object: {
                    pid,
                    uid,
                    type: User_Products_Type_Enum.InCart,
                  },
                })
              }
            >
              Move to cart
            </Button>
          </div>
        )}
        <div className='mt-auto text-xs text-gray'>{formatDate(updatedAt)}</div>
      </div>
    </div>
  )
}

export default WishlistCard
