import { formatDate } from 'lib/client'
import Image from 'src/components/atoms/Image'
import { MyOrdersQuery } from 'src/generated'

export interface IPurchasedCardProps {
  product: MyOrdersQuery['myOrders'][number]
}

const PurchasedCard = ({ product }: IPurchasedCardProps) => {
  const {
    updatedAt,
    product: { images, name },
  } = product

  return (
    <div>
      <Image alt='' src={images && images[0]} />
      <div className='mt-2 font-semibold'>{name}</div>
      <div className='mt-2 text-sm'>{formatDate(updatedAt || '')}</div>
    </div>
  )
}

export default PurchasedCard
