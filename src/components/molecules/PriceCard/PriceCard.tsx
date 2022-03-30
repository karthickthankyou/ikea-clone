import InformationCircleIcon from '@heroicons/react/outline/InformationCircleIcon'
import ShoppingCartIcon from '@heroicons/react/solid/ShoppingCartIcon'
import Tooltip from 'src/components/atoms/Tooltip'
import Button from 'src/components/atoms/Button/Button'
import Price from '../Price/Price'
import Rating from '../Rating'

export interface IPriceCardProps {
  title: string
  category: string
  price: number
  oldPrice: number
  notInStock?: boolean
}

const PriceCard = ({
  title,
  category,
  price,
  oldPrice,
  notInStock,
}: IPriceCardProps) => (
  <div className='max-w-lg'>
    <div>
      <div className='text-3xl font-bold'>{title}</div>
      <div className='text-lg font-light '>{category}</div>
    </div>
    <Price showTaxComment className='mt-8' price={price} oldPrice={oldPrice} />

    <Rating
      value={4.5}
      size='medium'
      color='black'
      className='mt-4'
      reviews={112}
    />

    {notInStock && (
      <div className='mt-4 text-sm text-gray-600'>
        Product not in stock.
        <Tooltip
          placement='top'
          arrow
          text='white'
          bg='black'
          title='Even if the product is in stock, we(I) can not serve you as this is just a portfolio project?'
        >
          <InformationCircleIcon className='inline w-4 h-4 ml-2' />
        </Tooltip>
      </div>
    )}
    <Button
      size='lg'
      disabled={notInStock}
      className='flex items-center gap-2 mt-8'
    >
      <ShoppingCartIcon className='w-5 h-5 text-white' /> Add to shopping cart
    </Button>
  </div>
)

export default PriceCard
