import React, { InputHTMLAttributes } from 'react'

export interface IHtmlInputProps {}

const HtmlInput = React.forwardRef<
  HTMLInputElement,
  InputHTMLAttributes<HTMLInputElement>
>((props, ref) => (
  <input
    ref={ref}
    className='block w-full px-3 py-2 border rounded appearance-none bg-gray-25 border-gray-50 placeholder-gray read-only:text-gray-600 read-only:cursor-not-allowed focus:outline-none focus:ring-primary focus:border-primary sm:text-sm'
    {...props}
  />
))
HtmlInput.displayName = 'Input'

export default HtmlInput
