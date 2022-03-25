export interface IPriceProps {
  price: number
  oldPrice?: number
  className?: string
}

const Price = ({ price, oldPrice, className }: IPriceProps) => (
  <div className={`flex gap-2 items-center flex-wrap ${className}`}>
    {oldPrice && (
      <div className='flex items-start leading-none line-through'>
        Rs.{oldPrice.toLocaleString('hi')}
      </div>
    )}
    <div className='flex items-start'>
      <div className='text-sm font-medium'>Rs.</div>
      <div className='text-2xl font-semibold leading-none'>
        {price.toLocaleString('hi')}
      </div>
    </div>
  </div>
)

export default Price
