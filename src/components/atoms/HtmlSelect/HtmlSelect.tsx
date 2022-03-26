/* eslint-disable react/jsx-props-no-spreading */
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
      className='block w-full px-3 py-2 placeholder-gray-500 border border-gray-200 rounded shadow-sm appearance-none bg-gray-50 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm'
    >
      {children}
    </select>
  </div>
))

HtmlSelect.displayName = 'HtmlSelect'

export default HtmlSelect
