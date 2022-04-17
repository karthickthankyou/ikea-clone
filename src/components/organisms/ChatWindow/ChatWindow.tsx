import { useState } from 'react'
import { useAppSelector } from 'src/store'
import SupportIcon from '@heroicons/react/solid/SupportIcon'
import XIcon from '@heroicons/react/solid/XIcon'

import FormIKEAChat from '../FormIKEAChat'

export interface IChatWindowProps {}

const ChatWindow = () => {
  const [open, setOpen] = useState(false)

  const uid = useAppSelector((state) => state.user.data.user?.uid)
  if (!uid) return null

  return (
    <div className='fixed bottom-0 right-0 z-10 p-6 '>
      {open && (
        <div className='absolute right-0 z-50 mb-2 mr-6 text-left shadow-xl bg-white/80 backdrop-filter backdrop-blur-lg w-96 bottom-full'>
          <FormIKEAChat close={() => setOpen(false)} />
        </div>
      )}
      <button type='button' onClick={() => setOpen((state) => !state)}>
        {!open ? (
          <SupportIcon className='w-6 h-6 fill-primary' />
        ) : (
          <XIcon className='w-6 h-6 fill-red' />
        )}
      </button>
    </div>
  )
}

export default ChatWindow
