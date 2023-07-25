import Link from 'next/link'
import LocationMarkerIcon from '@heroicons/react/solid/LocationMarkerIcon'
import { selectUid } from 'src/store/user'
import { useTransition, animated, config } from 'react-spring'

import styles from 'src/util/Topography.module.css'
import React from 'react'
import { useAppSelector } from 'src/store'
import { sections } from './dummy'

export interface ITripGuideProps {}

export type PageNames =
  | 'Home'
  | 'Products'
  | 'Product page'
  | 'Authentication'
  | 'Wishlist'
  | 'Cart'
  | 'Orders'
  | 'User'
  | 'Post new product'
  | '404'
  | 'Support'

const Section = ({
  title,
  href,
  className,

  Icon = LocationMarkerIcon,
  enabled = true,
  current = false,
}: {
  title: string
  href: string
  className?: string
  Icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>
  enabled?: boolean
  current?: boolean
}) => (
  <div className={`${className}  group translate-x-1/2 -translate-y-1/2`}>
    <div className='relative inline-flex items-center -skew-x-12 -skew-y-12 rotate-12'>
      {/* <div className='w-2 h-2 skew-y-12 rounded-full bg-red animate-ping' /> */}
      <div
        className={`absolute z-10 ml-1 whitespace-nowrap left-full ${
          !current &&
          'opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100 translate-y-1/3'
        }`}
      >
        {title} {current && '(You are here)'}
      </div>
      <Link href={href}>
        <Icon
          className={`flex-shrink-0 w-6 h-6 -z-10 group-hover:fill-primary ${
            enabled
              ? 'fill-black cursor-pointer'
              : 'fill-gray cursor-not-allowed'
          }`}
        />
      </Link>
    </div>
  </div>
)

const TripGuide = ({ currentPageName }: { currentPageName: PageNames }) => {
  const uid = useAppSelector(selectUid)

  const sectionsTransitions = useTransition(sections || [], {
    keys: (item) => item.title,
    from: { opacity: 0, transform: 'translateY(-12px) scale(0.6)' },
    enter: { opacity: 1, transform: 'translateY(0px) scale(1)' },
    leave: { opacity: 0, transform: 'translateY(-12px) scale(0)' },
    trail: 200,
    config: config.gentle,
  })

  return (
    <div className='px-16 py-24 overflow-scroll bg-gray-25 no-scrollbar'>
      <div className='flex flex-col items-center justify-center w-full mt-2 space-y-2 '>
        <div
          className={`px-4 pt-4 pb-16 max-w-lg  skew-x-12 relative  h-96 -rotate-12 w-full bg-primary/10 shadow-lg border-x-8 border-t-8  border-white rounded-xl ${styles.bgTopography}`}
          style={{ borderBottomWidth: '1.25rem' }}
        >
          <div
            style={{ top: '100%', left: '0%' }}
            className='absolute ml-1 text-xs text-gray'
          >
            Site map
          </div>
          {sectionsTransitions((style, item) => (
            <animated.div
              style={{ ...style, ...item.position }}
              className='absolute'
            >
              <Section
                title={item.title}
                href={item.href}
                Icon={item.Icon}
                current={currentPageName === item.title}
                enabled={item.enableCheck ? !!uid : true}
              />
            </animated.div>
          ))}
          {/* <Section
            title='Products'
            position={{ top: '80%', right: '40%' }}
            href='/products'
            Icon={SearchIcon}
            current={currentPageName === 'Products'}
          />
          <Section
            title='Product page'
            position={{ top: '92%', right: '32%' }}
            href='/products/5084'
            Icon={PhotographIcon}
            current={currentPageName === 'Product page'}
          />
          <Section
            title='Authentication'
            position={{ top: '64%', left: '24%' }}
            href='/createAccount'
            Icon={LockClosedIcon}
            current={currentPageName === 'Authentication'}
          />
          <Section
            title='Wishlist'
            position={{ top: '8%', right: '76%' }}
            href='/wishlist'
            Icon={HeartIcon}
            current={currentPageName === 'Wishlist'}
            enabled={!!uid}
          />
          <Section
            title='Cart'
            position={{ top: '16%', right: '84%' }}
            href='/cart'
            Icon={ShoppingCartIcon}
            current={currentPageName === 'Cart'}
            enabled={!!uid}
          />
          <Section
            title='Orders'
            position={{ top: '0%', right: '92%' }}
            href='/orders'
            Icon={BriefcaseIcon}
            current={currentPageName === 'Orders'}
            enabled={!!uid}
          />
          <Section
            title='User'
            position={{ top: '16%', right: '12%' }}
            href='/user'
            Icon={UserCircleIcon}
            current={currentPageName === 'User'}
            enabled={!!uid}
          />
          <Section
            title='Post new product'
            position={{ top: '8%', right: '2%' }}
            href='/products/new'
            Icon={PlusCircleIcon}
            current={currentPageName === 'Post new product'}
            enabled={!!uid}
          />
          <Section
            title='404'
            position={{ top: '58%', right: '2%' }}
            href='/404'
            Icon={InformationCircleIcon}
            current={currentPageName === '404'}
          />
          <Section
            title='Support'
            position={{ top: '6%', right: '56%' }}
            href='/support'
            Icon={SupportIcon}
            current={currentPageName === 'Support'}
          /> */}
        </div>
      </div>
    </div>
  )
}

export default TripGuide
