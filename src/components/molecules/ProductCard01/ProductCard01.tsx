/* eslint-disable camelcase */
import Image from 'src/components/atoms/Image'
import Link from 'next/link'
import HeartIcon from '@heroicons/react/outline/HeartIcon'
import HeartIconSolid from '@heroicons/react/solid/HeartIcon'
import ShoppingCartIcon from '@heroicons/react/solid/ShoppingCartIcon'
import {
  namedOperations,
  SearchProductsQuery,
  useInsertUserProductsOneMutation,
  UserProductStatus,
} from 'src/generated'
import { useAppSelector } from 'src/store'
import { useRouter } from 'next/router'
import { selectUid } from 'src/store/user'
import OverlapSpace from '../OverlapSpace'
import Rating from '../Rating/Rating'
import Price from '../Price/Price'
import Skeleton from '../Skeleton/Skeleton'

export interface IProductCard01Props {
  product: SearchProductsQuery['products'][0]
  className?: string
}

const HeartIconComponent = ({
  fetching,
  status,
}: {
  fetching: boolean
  status: UserProductStatus | undefined
}) => {
  if (fetching)
    return <HeartIconSolid className='w-6 h-6 fill-gray-200 animate-pulse' />
  if (status === UserProductStatus.InCart)
    return <ShoppingCartIcon className='w-6 h-6 ' />

  if (status === UserProductStatus.Wishlisted)
    return <HeartIconSolid className='w-6 h-6 fill-red' />

  return <HeartIcon className='w-6 h-6 text-red' />
}

const ProductCard01 = ({ product, className }: IProductCard01Props) => {
  const {
    userProduct,
    id,
    name,
    category,
    subCategory,
    rating,
    reviews,
    price,
    oldPrice,
    outOfStock,
    images,
  } = product

  const src = images && images[0]
  const [wishlistProduct, { loading, data }] =
    useInsertUserProductsOneMutation()
  const uid = useAppSelector(selectUid)

  const router = useRouter()

  return (
    <div className={`group ${className}`}>
      <OverlapSpace>
        <OverlapSpace.Child className='flex items-start justify-end gap-2 p-2'>
          <button
            type='button'
            onClick={async () => {
              if (!uid) {
                router.push('/login')
                return
              }
              if (userProduct?.status === UserProductStatus.InCart) {
                router.push('/cart')
                return
              }
              console.log('userProduct?.status', userProduct?.status)
              const targetState =
                userProduct?.status === UserProductStatus.Wishlisted
                  ? UserProductStatus.RemovedFromWishlist
                  : UserProductStatus.Wishlisted
              await wishlistProduct({
                variables: {
                  createUserProductInput: {
                    pid: id,
                    uid,
                    status: targetState,
                  },
                },
                awaitRefetchQueries: true,
                refetchQueries: [namedOperations.Query.SearchProducts],
              })
            }}
            className='z-10 p-2 transition-all rounded-full group-hover:bg-white hover:shadow-lg hover:bg-white bg-white/50 shadow-black/20'
          >
            <HeartIconComponent
              fetching={loading}
              status={userProduct?.status}
            />
          </button>
        </OverlapSpace.Child>
        <OverlapSpace.Child>
          <Link key={id} href={`/products/${id}`}>
            <Image src={src} alt='' className='w-full aspect-square' />
          </Link>
        </OverlapSpace.Child>
      </OverlapSpace>

      <div className='mt-4 font-bold line-clamp-1'>{name}</div>
      <div className='mt-1 text-sm text-gray-600 line-clamp-2'>
        {category} {subCategory}
      </div>
      <Price price={price} oldPrice={oldPrice} className='mt-3' />
      {outOfStock && <div className='text-red'>Out of stock</div>}
      {rating && (
        <Rating
          rating={rating}
          color='black'
          reviews={reviews}
          className='mt-2'
        />
      )}
    </div>
  )
}

export const ProductCard01Skeleton = () => (
  <div>
    <Skeleton className='w-full aspect-square' />
    <Skeleton className='w-3/4 h-6 mt-3' />
    <Skeleton className='w-1/2 h-4 mt-1' />
    <Skeleton className='w-1/3 h-4 mt-1' />
    <Skeleton className='w-1/2 h-5 mt-1' />
    <Skeleton className='w-1/4 h-5 mt-1' />
  </div>
)

export default ProductCard01
