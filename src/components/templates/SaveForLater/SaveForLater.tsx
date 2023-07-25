import { useEffect } from 'react'
import CartCard from 'src/components/organisms/CartCard/CartCard'
import { useTransition, animated, config } from 'react-spring'
import { useAppSelector } from 'src/store'

import { selectUid } from 'src/store/user'
import { UserProductStatus, useMyUserProductsLazyQuery } from 'src/generated'
import SavedForLaterCard from 'src/components/organisms/SavedForLaterCard'

export interface ISaveForLaterProps {
  className?: string
}

const SaveForLater = ({ className }: ISaveForLaterProps) => {
  const [getSaveForLater, { data, loading }] = useMyUserProductsLazyQuery()
  const uid = useAppSelector(selectUid)

  useEffect(() => {
    if (uid) {
      getSaveForLater({
        variables: {
          where: {
            status: { equals: UserProductStatus.SavedForLater },
            uid: { equals: uid },
          },
        },
      })
    }
  }, [getSaveForLater, uid])

  const saveForLaterTransitions = useTransition(data?.myUserProducts || [], {
    keys: (item) => item.id,
    from: {
      opacity: 0,
      height: 80,
      transform: 'translateX(-24px) skewX(6deg)',
    },
    enter: { opacity: 1, transform: 'translateX(0px) skewX(0deg)' },
    leave: { opacity: 0, transform: 'translateX(24px) skewX(-6deg)' },
    trail: 200,
    config: config.gentle,
  })

  if (data?.myUserProducts?.length === 0) {
    return null
  }
  return (
    <div
      className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 min-h-screen50 gap-8 ${className}`}
    >
      <div className='col-span-1 space-y-8 md:col-span-2'>
        {loading &&
          [1, 2, 3, 4].map((item) => (
            <div className='w-full bg-gray-200 h-28 animate-pulse' key={item} />
          ))}
        {saveForLaterTransitions((style, item) => (
          <animated.div style={style}>
            <SavedForLaterCard product={item} />
          </animated.div>
        ))}
      </div>
    </div>
  )
}

export default SaveForLater
