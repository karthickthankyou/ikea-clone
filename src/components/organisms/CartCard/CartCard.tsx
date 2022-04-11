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
export interface ICartCardProps {
  product: UserProductsData['user_products'][number]
}

const CartCard = ({ product }: ICartCardProps) => {
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
  const [{ fetching: savingForLater, data, error }, removeProductFromCart] =
    useInsertUserProductsOneMutation()
  const uid = useAppSelector((state) => state.user.data.user?.uid)
  return (
    <div className='flex group'>
      <div className='flex-shrink-0 w-24 h-24 mr-2'>
        <Image src={images && images[0]} alt='' />
      </div>
      <div className='flex-grow text-sm'>
        <div className='max-w-md font-medium'>{name}</div>
        <div className='text-gray-600'>
          {category} {subCategory}
        </div>
      </div>
      <div className='flex flex-col items-end justify-between '>
        <Price price={price} oldPrice={oldPrice} />

        <Button
          variant='text'
          className='hidden group-hover:block'
          isLoading={savingForLater}
          onClick={() =>
            removeProductFromCart({
              object: {
                pid,
                uid,
                type: User_Products_Type_Enum.SavedForLater,
              },
            })
          }
        >
          Save for later
        </Button>
      </div>
    </div>
  )
}

export default CartCard
