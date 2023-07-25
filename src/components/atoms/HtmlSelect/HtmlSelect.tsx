import React, { InputHTMLAttributes } from 'react'
import ChevronDownIcon from '@heroicons/react/outline/ChevronDownIcon'

const HtmlSelect = React.forwardRef<
  HTMLSelectElement,
  InputHTMLAttributes<HTMLSelectElement>
>(({ children, ...props }: InputHTMLAttributes<HTMLSelectElement>, ref) => (
  <div className='relative flex items-center justify-center'>
    <div className='absolute right-0 p-2 select-none'>
      <ChevronDownIcon className='w-4 h-4 text-gray-600 ' />
    </div>
    <select
      {...props}
      ref={ref}
      className='block w-full px-3 py-2 border rounded shadow-sm appearance-none border-gray-50 placeholder-gray bg-gray-25 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm'
    >
      {children}
    </select>
  </div>
))

HtmlSelect.displayName = 'HtmlSelect'

export default HtmlSelect
