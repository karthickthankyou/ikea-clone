/* eslint-disable camelcase */
import Image from 'src/components/atoms/Image'
import Link from 'src/components/atoms/Link/Link'
import HeartIcon from '@heroicons/react/outline/HeartIcon'
import HeartIconSolid from '@heroicons/react/solid/HeartIcon'
import ShoppingCartIcon from '@heroicons/react/solid/ShoppingCartIcon'
import {
  useInsertUserProductsOneMutation,
  User_Products_Type_Enum,
} from 'src/generated/graphql'
import { useAppSelector } from 'src/store'
import { ProductWithWishlist, SimpleUserProducts } from 'src/store/search'
import { useRouter } from 'next/router'
import OverlapSpace from '../OverlapSpace'
import Rating from '../Rating/Rating'
import Price from '../Price/Price'
import Skeleton from '../Skeleton/Skeleton'

export interface IProductCard01Props {
  product: ProductWithWishlist
  className?: string
}

const HeartIconComponent = ({
  fetching,
  mutationStatus,
  status,
}: {
  fetching: boolean
  mutationStatus: User_Products_Type_Enum | undefined
  status: User_Products_Type_Enum | undefined
}) => {
  if (fetching)
    return <HeartIconSolid className='w-6 h-6 fill-gray-200 animate-pulse' />
  if (status === User_Products_Type_Enum.InCart)
    return <ShoppingCartIcon className='w-6 h-6 fill-red' />

  if (
    status === User_Products_Type_Enum.Wishlisted ||
    mutationStatus === User_Products_Type_Enum.Wishlisted
  )
    return <HeartIconSolid className='w-6 h-6 fill-red' />

  return <HeartIcon className='w-6 h-6 text-red' />
}

const ProductCard01 = ({ product, className }: IProductCard01Props) => {
  const {
    userProducts,
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
  const [{ fetching, data }, wishlistProduct] =
    useInsertUserProductsOneMutation()
  const uid = useAppSelector((state) => state.user?.data.user?.uid)

  const router = useRouter()

  return (
    <div className={`group ${className}`}>
      <OverlapSpace>
        <OverlapSpace.Child className='flex items-start justify-end gap-2 p-2'>
          <button
            type='button'
            onClick={() => {
              if (!uid) router.push('/login')
              if (userProducts?.status === User_Products_Type_Enum.InCart) {
                router.push('/cart')
                return
              }

              const targetState =
                userProducts?.status === User_Products_Type_Enum.Wishlisted
                  ? User_Products_Type_Enum.RemovedFromWishlist
                  : User_Products_Type_Enum.Wishlisted
              wishlistProduct({
                object: { pid: id, uid, type: targetState },
              })
            }}
            className='z-10 p-2 transition-all rounded-full group-hover:bg-white hover:shadow-lg hover:bg-white bg-white/50 shadow-black/20'
          >
            <HeartIconComponent
              fetching={userProducts?.fetching || fetching}
              mutationStatus={data?.insert_user_products_one?.type}
              status={userProducts?.status}
            />
          </button>
        </OverlapSpace.Child>
        <OverlapSpace.Child>
          <Link key={id} href={`/products/${id}`}>
            <Image src={src} alt='' />
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
