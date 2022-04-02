import Image from 'src/components/atoms/Image'
import HeartIcon from '@heroicons/react/outline/HeartIcon'
import OverlapSpace from '../OverlapSpace'
import Rating from '../Rating/Rating'
import Price from '../Price/Price'

export interface IProductCard01Props {
  tag?: string
  title: string
  description?: string
  src: string
  rating?: number
  reviews?: number
  price: number
  oldPrice?: number
  className?: string
}

const ProductCard01 = ({
  tag,
  title,
  description,
  src,
  rating,
  reviews,
  price,
  oldPrice,
  className,
}: IProductCard01Props) => (
  <div className={`group ${className}`}>
    <OverlapSpace>
      <OverlapSpace.Child className='-z-10'>
        <Image src={src} alt='' />
      </OverlapSpace.Child>
      <OverlapSpace.Child className='flex items-start justify-end p-2'>
        <button
          type='button'
          onClick={() => console.log('Heart clicked')}
          className='p-2 transition-all rounded-full group-hover:scale-110 group-hover:bg-white hover:shadow-lg hover:bg-white bg-white/50 shadow-black/20'
        >
          <HeartIcon className='w-6 h-6' />
        </button>
      </OverlapSpace.Child>
    </OverlapSpace>
    <div className='mt-4 font-semibold text-primary'>{tag}</div>
    <div className='mt-1 font-bold line-clamp-1'>{title}</div>
    <div className='mt-1 text-sm text-gray-600 line-clamp-2'>{description}</div>
    <Price price={price} oldPrice={oldPrice} className='mt-3' />
    {rating && (
      <Rating value={rating} color='black' reviews={reviews} className='mt-2' />
    )}
  </div>
)

export default ProductCard01
