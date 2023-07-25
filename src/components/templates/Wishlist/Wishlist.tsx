import { useEffect } from 'react'
import CartCard from 'src/components/organisms/CartCard/CartCard'
import { useTransition, animated, config } from 'react-spring'
import { useAppSelector } from 'src/store'

import { selectUid } from 'src/store/user'
import { UserProductStatus, useMyUserProductsLazyQuery } from 'src/generated'
import WishlistCard from 'src/components/organisms/WishlistCard'

export interface IWishlistProps {
  className?: string
}

const Wishlist = ({ className }: IWishlistProps) => {
  const [getWishlist, { data, loading }] = useMyUserProductsLazyQuery()
  const uid = useAppSelector(selectUid)

  useEffect(() => {
    if (uid) {
      getWishlist({
        variables: {
          where: {
            status: { equals: UserProductStatus.Wishlisted },
            uid: { equals: uid },
          },
        },
      })
    }
  }, [getWishlist, uid])

  const wishlistTransitions = useTransition(data?.myUserProducts || [], {
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
    return (
      <div className='flex flex-col items-center justify-center h-screen50'>
        <div className='text-lg font-bold'>Wishlist is empty.</div>
      </div>
    )
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
        {wishlistTransitions((style, item) => (
          <animated.div style={style}>
            <WishlistCard product={item} />
          </animated.div>
        ))}
      </div>
    </div>
  )
}

export default Wishlist
