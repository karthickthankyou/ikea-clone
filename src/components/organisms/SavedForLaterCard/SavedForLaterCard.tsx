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

export interface ISavedForLaterCardProps {
  product: MyUserProductsQuery['myUserProducts'][0]
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
  const [insertUserProduct, { loading: movingToCart }] =
    useInsertUserProductsOneMutation()
  const [removeUserProduct, { loading: removingItem }] =
    useInsertUserProductsOneMutation()

  const uid = useAppSelector(selectUid)
  return (
    <div className='flex group'>
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
        <div className='flex items-center justify-between'>
          <Button
            variant='text'
            color='white'
            isLoading={removingItem}
            disabled={Boolean(outOfStock)}
            onClick={async () => {
              if (!uid) {
                notify({ message: 'You are not loggedin.' })
                return
              }
              await removeUserProduct({
                variables: {
                  createUserProductInput: {
                    pid,
                    uid,
                    status: UserProductStatus.RemovedFromWishlist,
                  },
                },
                awaitRefetchQueries: true,
                refetchQueries: [namedOperations.Query.myUserProducts],
              })
            }}
          >
            Remove
          </Button>
          {!outOfStock && (
            <div className='mt-2'>
              <Button
                variant='text'
                isLoading={movingToCart}
                disabled={Boolean(outOfStock)}
                onClick={async () => {
                  if (!uid) {
                    notify({ message: 'You are not loggedin.' })
                    return
                  }
                  await insertUserProduct({
                    variables: {
                      createUserProductInput: {
                        pid,
                        uid,
                        status: UserProductStatus.InCart,
                      },
                    },
                    awaitRefetchQueries: true,
                    refetchQueries: [namedOperations.Query.myUserProducts],
                  })
                }}
              >
                Move to cart
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default SavedForLaterCard
