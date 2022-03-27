import TruckIcon from '@heroicons/react/outline/TruckIcon'
import InformationCircleIcon from '@heroicons/react/outline/InformationCircleIcon'
import ShoppingCartIcon from '@heroicons/react/solid/ShoppingCartIcon'
import Tooltip from 'src/components/atoms/Tooltip'
import Button from 'src/components/atoms/Button/Button'
import Price from '../Price/Price'
import Rating from '../Rating'

export interface IPriceCardProps {
  title: string
  category: string
  description: string
  price: number
  oldPrice: number
}

const PriceCard = ({
  title,
  category,
  price,
  oldPrice,
  description,
}: IPriceCardProps) => (
  <div className='max-w-lg'>
    <div className='flex flex-wrap justify-between'>
      <div className='text-2xl font-bold'>{title}</div>
      <Price price={price} oldPrice={oldPrice} />
    </div>
    <div className='text-lg font-light'>{category}</div>

    <div className='mt-2 text-sm text-gray-600'>Price incl. of all taxes</div>
    <Rating value={4.5} color='black' className='mt-1' reviews={112} />
    <div className='mt-4 text-xs'>
      We are currently not delivering to your area.
      <Tooltip
        placement='top'
        arrow
        text='white'
        bg='black'
        title='You know this is a portfolio project right?'
      >
        <InformationCircleIcon className='inline w-4 h-4 ml-2' />
      </Tooltip>
    </div>
    <Button size='lg' classNameOuter='mt-4' className='flex items-center gap-2'>
      <ShoppingCartIcon className='w-5 h-5 text-white' /> Add to shopping cart
    </Button>
  </div>
)

export default PriceCard
