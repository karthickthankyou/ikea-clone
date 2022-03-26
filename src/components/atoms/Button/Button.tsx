import { MouseEventHandler } from 'react'
import { Children } from 'src/types'
import RefreshIcon from '@heroicons/react/outline/RefreshIcon'

export interface IButtonProps {
  children: Children
  size?: 'sm' | 'md' | 'lg'
  variant?: 'contained' | 'outlined' | 'text'
  color?: 'primary' | 'success' | 'error' | 'white' | 'black'
  fullWidth?: boolean
  disabled?: boolean
  onClick?: MouseEventHandler<HTMLButtonElement>
  className?: string
  isLoading?: boolean
}

const variantColor = {
  contained: {
    primary: 'text-white bg-primary-600 hover:bg-primary-700',
    white: 'text-black bg-white',
    black: 'text-white bg-black hover:bg-gray-900',
    success: 'text-white bg-green-600 hover:bg-green-700',
    error: 'text-white bg-red-600 hover:bg-red-700',
  },

  outlined: {
    primary:
      'border-2 border-primary-600 text-primary-600 hover:bg-primary-100',
    white: 'border-2 border-white text-black hover:bg-white/10',
    black: 'border-2 border-black text-white hover:bg-black/10',
    success: 'border-2 border-green-600 text-green-600 hover:bg-green-100',
    error: 'border-2 border-red-600 text-red-600 hover:bg-red-100',
  },
  text: {
    primary: 'text-primary-600 hover:bg-primary-100',
    white: 'text-black hover:bg-white/10',
    black: 'text-white hover:bg-black/10',
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
  onClick = () => console.error('onClick not implemented'),
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
      onClick={onClick}
      className={`rounded-full relative ${sizeCls} ${fwCls} ${variantCls} ${disCls} ${className}`}
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
