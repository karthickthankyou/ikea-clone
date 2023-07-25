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
import { useAppSelector } from 'src/store'
import Link from 'next/link'
import { formatDate } from 'lib/client'
import { notify } from 'src/hooks'
import { selectUid } from 'src/store/user'

export interface IWishlistCardProps {
  product: MyUserProductsQuery['myUserProducts'][0]
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
  const [insertUserProduct, { loading: movingToCart, data, error }] =
    useInsertUserProductsOneMutation()
  const uid = useAppSelector(selectUid)
  return (
    <div className='flex'>
      <Link
        href={`/products/${pid}`}
        className='relative flex-shrink-0 w-40 h-48 mr-2'
      >
        <Image
          src={images && images[0]}
          alt=''
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
              onClick={async () => {
                if (!uid) {
                  notify({ message: 'You are not logged in.' })
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
        <div className='mt-auto text-xs text-gray'>{formatDate(updatedAt)}</div>
      </div>
    </div>
  )
}

export default WishlistCard
