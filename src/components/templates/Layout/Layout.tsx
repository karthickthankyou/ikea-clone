import { ReactElement } from 'react'
import { SkipNavContent, SkipNavLink } from '@reach/skip-nav'

import { useRouter } from 'next/router'
import Navbar from '../../organisms/Navbar'
import Footer from '../../organisms/Footer'

interface ILayoutProps {
  children: ReactElement | ReactElement[]
}

const NoNavUrls = ['/signup', '/login']

const Layout = ({ children }: ILayoutProps) => {
  const url = useRouter().pathname

  return NoNavUrls.includes(url) ? (
    <main>{children}</main>
  ) : (
    <>
      <SkipNavLink className='absolute z-50 opacity-0 focus:opacity-70'>
        Skip
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
