import { ReactElement } from 'react'
import { SkipNavContent, SkipNavLink } from '@reach/skip-nav'
import FastForwardIcon from '@heroicons/react/solid/FastForwardIcon'

import { useRouter } from 'next/router'
import Navbar from '../../organisms/Navbar'
import Footer from '../../organisms/Footer'

interface ILayoutProps {
  children: ReactElement | ReactElement[]
}

const NoNavUrls = ['/createAccount', '/login']

const Layout = ({ children }: ILayoutProps) => {
  const url = useRouter().pathname

  return NoNavUrls.includes(url) ? (
    <main>{children}</main>
  ) : (
    <>
      <SkipNavLink className='absolute z-50 px-2 py-1 text-red-700 bg-red-100 opacity-20 -translate-y-14 focus:translate-y-0 focus:opacity-100'>
        <div className='flex items-center gap-2'>
          Skip navigation bar{' '}
          <FastForwardIcon className='w-4 h-4 animate-slide-right' />
        </div>
      </SkipNavLink>
      <Navbar />
      <main>
        <SkipNavContent />
        {children}
      </main>
      <Footer />
    </>
  )
}

export default Layout
