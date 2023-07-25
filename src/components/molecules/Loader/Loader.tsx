import { IconLoader } from '@tabler/icons-react'

export const Loader = () => <IconLoader className='animate-spin' />
export const LoaderPanel = ({ text }: { text?: string }) => (
  <div className='flex items-center justify-center h-40 gap-1 bg-gray-25'>
    <IconLoader className='animate-spin' />
    <div>{text}</div>
  </div>
)
