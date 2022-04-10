import { formatDate } from 'lib/client'
import Image from 'src/components/atoms/Image'
import { GetOrderedProductsQuery } from 'src/generated/graphql'

export interface IPurchasedCardProps {
  product: GetOrderedProductsQuery['orders'][number]
}

const PurchasedCard = ({ product }: IPurchasedCardProps) => {
  const {
    updatedAt,
    product: { images, name },
  } = product
  console.log()
  return (
    <div>
      <Image src={images && images[0]} />
      <div className='mt-2 font-semibold'>{name}</div>
      <div className='mt-2 text-sm'>{formatDate(updatedAt)}</div>
    </div>
  )
}

export default PurchasedCard
