import { Children } from 'src/types'

export interface IPriceMarkerProps {
  displayName: string
  category: string
  price: number
  badge?: Children
  className?: string
}

const PriceMarker = ({
  displayName,
  category,
  price,
  badge,
  className,
}: IPriceMarkerProps) => (
  <div className={`flex flex-col ${className}`}>
    {badge}
    <div className='font-bold uppercase'>{displayName}</div>
    <div className='font-light'>{category}</div>
    <div className='flex items-start mt-1 font-semibold'>
      <div className='text-xs'>Rs.</div>
      <div className='text-xl leading-none'>{price}</div>
    </div>
  </div>
)

export default PriceMarker
