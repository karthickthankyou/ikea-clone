import { Children } from 'src/types'
import Price from '../Price/Price'

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
  <div className={`flex flex-col h-full ${className}`}>
    {badge}
    <div className='font-bold uppercase'>{displayName}</div>
    <div className='-mt-0.5 font-light'>{category}</div>
    <Price className='mt-1' price={price} />
  </div>
)

export default PriceMarker
