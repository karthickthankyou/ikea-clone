import Rating, { RatingProps } from '@mui/material/Rating'

export type IRatingProps = {
  value: number
  reviews?: number
  color?: 'primary' | 'black' | 'red' | 'green' | 'yellow'
  className?: string
} & RatingProps

const colorClasses = {
  primary: 'text-primary-600',
  black: 'text-black',
  red: 'text-red-600',
  green: 'text-green-600',
  yellow: 'text-yellow-600',
}

const RatingComponent = ({
  value,
  color = 'primary',
  reviews,
  className,
  ...props
}: IRatingProps) => (
  <div className={`flex items-center gap-2 ${className}`}>
    <Rating
      readOnly
      value={value}
      precision={0.1}
      size='small'
      classes={{
        iconFilled: colorClasses[color],
      }}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    />
    {reviews && <div className='text-sm'>({reviews.toLocaleString()})</div>}
  </div>
)

export default RatingComponent
