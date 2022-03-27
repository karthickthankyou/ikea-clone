/* eslint-disable react/jsx-props-no-spreading */
import RefreshIcon from '@heroicons/react/outline/RefreshIcon'

type ButtonSizes = 'none' | 'sm' | 'md' | 'lg' | 'xl'

export type IButtonProps = {
  size?: ButtonSizes
  variant?: 'contained' | 'outlined' | 'text'
  color?: 'primary' | 'success' | 'error' | 'white' | 'black'
  fullWidth?: boolean
  isLoading?: boolean
  classNameOuter?: string
} & React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>

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
    primary: 'text-primary-600 ',
    white: 'text-black',
    black: 'text-white',
    success: 'text-green-600 ',
    error: 'text-red-600 ',
  },
}

const sizes: { [key in ButtonSizes]: string } = {
  none: 'text-sm',
  sm: 'px-3 py-1.5 text-xs',
  md: 'px-4 py-2 text-sm',
  lg: 'px-5 py-2 text-base',
  xl: 'px-8 py-3 text-xl',
}

const Button = ({
  size = 'md',
  variant = 'contained',
  color = 'primary',
  fullWidth = false,
  disabled = false,
  children,
  className,
  classNameOuter,
  isLoading = false,
  type = 'button',
  ...props
}: IButtonProps) => {
  const variantCls = variantColor[variant][color]
  const sizeCls = variant === 'text' ? sizes.none : sizes[size]

  const fwCls = fullWidth && 'w-full'
  const disCls = (disabled || isLoading) && 'opacity-60 cursor-auto'

  const loadingCls = isLoading ? 'opacity-0' : ''

  return (
    <button
      // eslint-disable-next-line react/button-has-type
      type={type}
      disabled={disabled || isLoading}
      className={`rounded-full relative ${sizeCls} ${fwCls} ${variantCls} ${disCls}  ${classNameOuter}`}
      {...props}
    >
      {isLoading && (
        <div className='absolute inset-0 flex items-center justify-center'>
          <RefreshIcon className='w-5 h-5 animate-spin-reverse' />
        </div>
      )}
      <span className={`${className} font-medium ${loadingCls}`}>
        {children}
      </span>
    </button>
  )
}

export default Button
