import { MouseEventHandler } from 'react'
import { Children } from 'src/types'
import RefreshIcon from '@heroicons/react/outline/RefreshIcon'

export interface IButtonProps {
  children: Children
  size?: 'sm' | 'md' | 'lg'
  variant?: 'contained' | 'outlined' | 'text'
  color?: 'primary' | 'success' | 'error'
  fullWidth?: boolean
  disabled?: boolean
  onClickAction?: MouseEventHandler<HTMLButtonElement>
  className?: string
  isLoading?: boolean
}

const variantColor = {
  contained: {
    primary: 'text-white bg-primary-600 hover:bg-primary-700',
    success: 'text-white bg-green-600 hover:bg-green-700',
    error: 'text-white bg-red-600 hover:bg-red-700',
  },

  outlined: {
    primary:
      'border-2 border-primary-600 text-primary-600 hover:bg-primary-100',
    success: 'border-2 border-green-600 text-green-600 hover:bg-green-100',
    error: 'border-2 border-red-600 text-red-600 hover:bg-red-100',
  },
  text: {
    primary: 'text-primary-600 hover:bg-primary-100',
    success: 'text-green-600 hover:bg-green-100',
    error: 'text-red-600 hover:bg-red-100',
  },
}

const sizes = {
  sm: 'px-3 py-1.5 text-xs',
  md: 'px-4 py-2 text-sm',
  lg: 'px-5 py-2 text-base',
}

const Button = ({
  size = 'md',
  variant = 'contained',
  color = 'primary',
  fullWidth = false,
  disabled = false,
  children = '',
  // eslint-disable-next-line no-console
  onClickAction = () => console.error('onClick not implemented'),
  className = '',
  isLoading = false,
}: IButtonProps) => {
  const sizeCls = sizes[size]
  const variantCls = variantColor[variant][color]

  const fwCls = fullWidth && 'w-full'
  const disCls = (disabled || isLoading) && 'opacity-60 cursor-auto'

  const loadingCls = isLoading ? 'opacity-0' : ''

  return (
    <button
      type='button'
      disabled={disabled || isLoading}
      onClick={onClickAction}
      className={`uppercase rounded-sm relative ${sizeCls} ${fwCls} ${variantCls} ${disCls} ${className}`}
    >
      {isLoading && (
        <div className='absolute inset-0 flex items-center justify-center'>
          <RefreshIcon className='w-5 h-5 animate-spin-reverse' />
        </div>
      )}
      <span className={loadingCls}>{children}</span>
    </button>
  )
}

export default Button
