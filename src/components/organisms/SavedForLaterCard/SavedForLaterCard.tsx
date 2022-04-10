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

type UserProductsData = Required<UserProductSliceType['userProducts']>['data']

export interface ISavedForLaterCardProps {
  product: UserProductsData['user_products'][number]
}

const SavedForLaterCard = ({ product }: ISavedForLaterCardProps) => {
  const {
    pid,
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
    <div className='md:flex group'>
      <div className='flex-shrink-0 w-24 h-24 mr-2'>
        <Image src={images && images[0]} alt='' />
      </div>
      <div className='flex-grow'>
        <div className='text-sm font-medium line-clamp-3'>{name}</div>
        <div className='mt-1 text-sm text-gray-600'>
          {category} {subCategory}
        </div>
        <Price price={price} oldPrice={oldPrice} className='mt-2' />
        {outOfStock && <div className='text-red'>Out of stock</div>}
        {!outOfStock && (
          <div className='mt-2'>
            <Button
              variant='text'
              className='hidden group-hover:block'
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
      </div>
    </div>
  )
}

export default SavedForLaterCard
