import { useAppSelector, useAppDispatch } from 'src/store'
import XIcon from '@heroicons/react/outline/XIcon'
import { selectNotifications, removeNotification } from 'src/store/utils'
import { useTransition, animated, config } from 'react-spring'
import { NotificationType } from 'src/types'
import { useNotification } from 'src/hooks'

const Notifications = () => {
  useNotification()
  const notifications = useAppSelector(selectNotifications)
  const dispatch = useAppDispatch()

  const markersTransitions = useTransition([...notifications] || [], {
    keys: (notification) => notification.id,
    from: { opacity: 0, transform: 'translateY(50%)' },
    enter: { opacity: 1, transform: 'translateY(0px)' },
    leave: { opacity: 0, transform: 'translateY(50%)' },
    // update: { opacity: 1, transform: 'translateY(0px)' },
    trail: 100,
    config: config.gentle,
  })

  const getTextcolor = (type: NotificationType['type']) => {
    switch (type) {
      case 'success':
        return 'text-green-800 bg-green-50/60'
      case 'error':
        return 'text-red-800 bg-red-50/60'
      case 'warning':
        return 'text-yellow-800 bg-yellow-50/60'
      case 'info':
        return 'text-primary-800 bg-primary-50/60'
      default:
        return 'text-black bg-white '
    }
  }
  return (
    <div
      data-chromatic='ignore'
      className='fixed bottom-0 z-30 flex flex-col items-center w-full p-1 space-y-3'
    >
      {markersTransitions((style, marker) => (
        <animated.div
          className='flex items-center '
          key={marker.id}
          style={style}
        >
          <div
            className={`pl-6 pr-8 py-4  shadow-xl  ${getTextcolor(
              marker.type
            )}`}
          >
            {marker.message}
          </div>
          <button
            type='button'
            className='z-40 -ml-6'
            onClick={() => dispatch(removeNotification(marker.id))}
          >
            <XIcon className='w-5 h-5 text-black' />
          </button>
        </animated.div>
      ))}
    </div>
  )
}

export default Notifications
