import { useState } from 'react'
import { useAppSelector } from 'src/store'
import SupportIcon from '@heroicons/react/solid/SupportIcon'

import Sidebar from 'src/components/molecules/Sidebar/Sidebar'
import FormIKEAChat from '../FormIKEAChat'

export interface IChatWindowProps {}

const ChatWindow = () => {
  const [open, setOpen] = useState(false)

  const uid = useAppSelector((state) => state.user.data.user?.uid)
  if (!uid) return null

  return (
    <div className='fixed bottom-0 right-0 z-50 p-3 md:p-6 '>
      <Sidebar open={open} setOpen={setOpen}>
        <Sidebar.Header>
          <div className='text-xl font-semibold text-primary '>
            Get support!
          </div>
        </Sidebar.Header>
        <Sidebar.Body>
          <FormIKEAChat />
        </Sidebar.Body>
      </Sidebar>

      <button
        type='button'
        className='p-1 transition-transform rounded-full shadow-xl bg-yellow hover:shadow-black/30 hover:scale-125'
        onClick={() => setOpen((state) => !state)}
      >
        <SupportIcon className='w-6 h-6 fill-primary' />
      </button>
    </div>
  )
}

export default ChatWindow
