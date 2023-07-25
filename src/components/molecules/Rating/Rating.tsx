import Rating, { RatingProps } from '@mui/material/Rating'
import Tooltip from 'src/components/atoms/Tooltip/Tooltip'

export type IRatingProps = {
  rating: number
  reviews?: number | null
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
  rating,
  color = 'primary',
  reviews,
  className,
  ...props
}: IRatingProps) => (
  <div className={`flex items-center gap-2 ${className}`}>
    <Rating
      readOnly
      value={rating}
      precision={0.1}
      size='small'
      classes={{
        iconFilled: colorClasses[color],
      }}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    />
    <Tooltip
      placement='bottom'
      enterTouchDelay={0}
      arrow
      text='white'
      bg='gray'
      title={<div className='max-w-xs p-1 space-y-2 '>{rating} ★</div>}
    >
      {reviews ? (
        <div className='text-sm'>({reviews.toLocaleString()})</div>
      ) : (
        <div />
      )}
    </Tooltip>
  </div>
)

export default RatingComponent
