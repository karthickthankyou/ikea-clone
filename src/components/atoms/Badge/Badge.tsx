import { Children } from 'src/types'

export interface IBadgeProps {
  children: Children
  size?: 'sm' | 'md' | 'lg'
  variant?: 'primary' | 'gray' | 'red' | 'yellow' | 'green'
}

const Badge = ({ children, size = 'md', variant = 'gray' }: IBadgeProps) => {
  const sizeCls = {
    sm: 'px-1 py-0.5 text-xs',
    md: 'px-2 py-1.5 text-sm',
    lg: 'px-3 py-1.5',
  }
  const variantCls = {
    primary: 'bg-primary text-white',
    gray: 'bg-gray text-white',
    red: 'bg-red text-white',
    yellow: 'bg-yellow-50 text-black',
    green: 'bg-green-300 text-black',
  }
  return (
    <span
      className={`transition-all inline-block font-semibold ${sizeCls[size]} ${variantCls[variant]}`}
    >
      {children}
    </span>
  )
}

export default Badge
