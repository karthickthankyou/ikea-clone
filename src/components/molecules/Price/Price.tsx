export interface IPriceProps {
  price: number
  showTaxComment?: boolean
  oldPrice?: number | null
  className?: string
}

const Price = ({
  price,
  oldPrice,
  showTaxComment = false,
  className,
}: IPriceProps) => (
  <div>
    <div className={`flex gap-2 items-center flex-wrap ${className}`}>
      {oldPrice
        ? oldPrice > price && (
            <s className='flex items-start leading-none'>
              Rs.{oldPrice?.toLocaleString('hi')}
            </s>
          )
        : null}
      <div className='flex items-start'>
        <div className='text-sm font-medium'>Rs.</div>
        <div className='text-xl font-semibold leading-none'>
          {price?.toLocaleString('hi')}
        </div>
      </div>
    </div>
    {showTaxComment && (
      <div className='mt-1 text-sm text-gray-600'>
        Price incl. of all taxes.
      </div>
    )}
  </div>
)

export default Price
