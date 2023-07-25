/* eslint-disable camelcase */
import Button from 'src/components/atoms/Button/Button'
import Image from 'src/components/atoms/Image'
import Price from 'src/components/molecules/Price/Price'
import {
  MyUserProductsQuery,
  namedOperations,
  useInsertUserProductsOneMutation,
  UserProductStatus,
} from 'src/generated'
import { notify } from 'src/hooks'
import { useAppSelector } from 'src/store'
import { selectUid } from 'src/store/user'

export interface ICartCardProps {
  product: MyUserProductsQuery['myUserProducts'][0]
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
  const [removeProductFromCart, { loading: savingForLater, data, error }] =
    useInsertUserProductsOneMutation()
  const uid = useAppSelector(selectUid)
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
          onClick={async () => {
            if (!uid) {
              notify({ message: 'You are not logged in.' })
              return
            }
            await removeProductFromCart({
              variables: {
                createUserProductInput: {
                  pid,
                  uid,
                  status: UserProductStatus.SavedForLater,
                },
              },
              awaitRefetchQueries: true,
              refetchQueries: [namedOperations.Query.myUserProducts],
            })
          }}
        >
          Save for later
        </Button>
      </div>
    </div>
  )
}

export default CartCard
