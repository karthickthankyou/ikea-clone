import InformationCircleIcon from '@heroicons/react/solid/InformationCircleIcon'
import MicrophoneIcon from '@heroicons/react/solid/MicrophoneIcon'
import Tooltip from 'src/components/atoms/Tooltip/Tooltip'
import { Children } from 'src/types'

export interface IDeveloperCommentaryProps {
  children: Children
}

const DeveloperCommentary = ({ children }: IDeveloperCommentaryProps) => (
  <Tooltip
    placement='bottom'
    enterTouchDelay={0}
    arrow
    text='white'
    bg='black'
    title={
      <div className='max-w-xs p-4 space-y-2 '>
        <div className='flex items-center gap-1 text-lg font-bold text-yellow'>
          <MicrophoneIcon className='w-5 h-5' />
          Developer commentary
        </div>
        {children}
        <div className='mt-2 mb-3 text-right text-gray-400 transition-all hover:text-white'>
          Karthick Ragavendran
        </div>
      </div>
    }
  >
    <InformationCircleIcon className='inline w-6 h-6 cursor-context-menu' />
  </Tooltip>
)

export default DeveloperCommentary
