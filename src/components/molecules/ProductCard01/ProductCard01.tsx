/* eslint-disable camelcase */
import Image from 'src/components/atoms/Image'
import Link from 'src/components/atoms/Link/Link'
import HeartIcon from '@heroicons/react/outline/HeartIcon'
import HeartIconSolid from '@heroicons/react/solid/HeartIcon'
import RefreshIcon from '@heroicons/react/outline/RefreshIcon'
import {
  useGetUserProductsQuery,
  useInsertUserProductsOneMutation,
  User_Products_Type_Enum,
} from 'src/generated/graphql'
import { useAppSelector } from 'src/store'
import { useRouter } from 'next/router'
import OverlapSpace from '../OverlapSpace'
import Rating from '../Rating/Rating'
import Price from '../Price/Price'
import Skeleton from '../Skeleton/Skeleton'

export interface IProductCard01Props {
  id: number
  tag?: string
  title: string
  description?: string
  src: string
  rating?: number
  reviews?: number
  price: number
  oldPrice?: number
  className?: string
  wishlisted?: User_Products_Type_Enum
}

const HeartIconComponent = ({
  fetching,
  type,
  wishlisted,
}: {
  fetching: boolean
  type: User_Products_Type_Enum | undefined
  wishlisted: User_Products_Type_Enum | undefined
}) => {
  if (fetching) return <RefreshIcon className='w-6 h-6 animate-spin-reverse' />

  if (
    wishlisted === User_Products_Type_Enum.Wishlisted ||
    type === User_Products_Type_Enum.Wishlisted
  )
    return <HeartIconSolid className='w-6 h-6 fill-red' />

  return <HeartIcon className='w-6 h-6' />
}

const ProductCard01 = ({
  id,
  tag,
  title,
  description,
  src,
  rating,
  reviews,
  price,
  oldPrice,
  className,
  wishlisted,
}: IProductCard01Props) => {
  const [{ fetching, data, error }, wishlistProduct] =
    useInsertUserProductsOneMutation()
  const uid = useAppSelector((state) => state.user.data.user?.uid)

  const router = useRouter()

  return (
    <div className={`group ${className}`}>
      <OverlapSpace>
        <OverlapSpace.Child className='flex items-start justify-end p-2'>
          <button
            type='button'
            onClick={() => {
              if (!uid) router.push('/login')
              const targetState =
                wishlisted === User_Products_Type_Enum.Wishlisted
                  ? User_Products_Type_Enum.RemovedFromWishlist
                  : User_Products_Type_Enum.Wishlisted
              wishlistProduct({
                object: { pid: id, uid, type: targetState },
              })
            }}
            className='z-10 p-2 transition-all rounded-full group-hover:bg-white hover:shadow-lg hover:bg-white bg-white/50 shadow-black/20'
          >
            <HeartIconComponent
              fetching={fetching}
              type={data?.insert_user_products_one?.type}
              wishlisted={wishlisted}
            />
          </button>
        </OverlapSpace.Child>
        <OverlapSpace.Child>
          <Link key={id} href={`product/${id}`}>
            <Image src={src} alt='' />
          </Link>
        </OverlapSpace.Child>
      </OverlapSpace>
      <div className='mt-4 font-semibold text-primary'>{tag}</div>
      <div className='mt-1 font-bold line-clamp-1'>{title}</div>
      <div className='mt-1 text-sm text-gray-600 line-clamp-2'>
        {description}
      </div>
      <Price price={price} oldPrice={oldPrice} className='mt-3' />
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
