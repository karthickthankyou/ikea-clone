import React, { HTMLProps } from 'react'

const HtmlTextArea = React.forwardRef<
  HTMLTextAreaElement,
  HTMLProps<HTMLTextAreaElement>
>((props, ref) => (
  <textarea
    ref={ref}
    {...props}
    className='block w-full px-3 py-2 border rounded appearance-none border-gray-50 placeholder-gray bg-gray-25 read-only:text-gray-600 read-only:cursor-not-allowed focus:outline-none focus:ring-primary focus:border-primary sm:text-sm'
  />
))
HtmlTextArea.displayName = 'TextArea'

export default HtmlTextArea
