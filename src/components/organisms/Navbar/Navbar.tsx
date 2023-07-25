import UserIcon from '@heroicons/react/outline/UserIcon'
import ShoppingCartIcon from '@heroicons/react/outline/ShoppingCartIcon'
import ChevronRightIcon from '@heroicons/react/outline/ChevronRightIcon'
import SearchIcon from '@heroicons/react/outline/SearchIcon'
import MenuIcon from '@heroicons/react/outline/MenuIcon'
import Link from 'next/link'
import Sidebar from 'src/components/molecules/Sidebar/Sidebar'
import { Dispatch, SetStateAction, useState } from 'react'
import Button from 'src/components/atoms/Button/Button'
import Logo from 'src/components/atoms/Logo/Logo'

import { useAppDispatch, useAppSelector } from 'src/store'
import Container from 'src/components/atoms/Container/Container'
import { selectUser } from 'src/store/user'
import { signOut } from '../../../config/auth'

export interface INavbarProps {}

const mainmenu = {
  menu1: ['Products', 'Rooms', 'New at IKEA', 'All offers'],
  menu2: ['Tips and inspirations', 'Currently at IKEA', 'Track your order'],
  menu3: [
    'IKEA Family',
    'IKEA Business',
    'IKEA Restaurant',
    'Our stores',
    'Design your room',
    'Customer service',
    'Download the IKEA app',
  ],
}

const NavSidebarUser = ({
  open,
  setOpen,
}: {
  open: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
}) => {
  const { loaded, displayName, uid } = useAppSelector((state) => state.user)

  const dispatch = useAppDispatch()
  return (
    <Sidebar open={open} setOpen={setOpen}>
      <Sidebar.Header className='pt-24 text-black bg-yellow-200'>
        <div className='flex items-end justify-between'>
          <div className='text-xl'>
            <div className='max-w-xs text-5xl font-bold '>
              Hej{' '}
              {uid ? (
                <span className='text-primary'>{displayName}</span>
              ) : (
                'Visitor.'
              )}
            </div>
          </div>
          {uid && (
            <Button
              color='white'
              onClick={async () => {
                await signOut()
              }}
            >
              Log out
            </Button>
          )}
        </div>
      </Sidebar.Header>
      <Sidebar.Body>
        <div className='flex flex-col items-start w-full'>
          {['IKEA account', 'Upgrade to IKEA Family'].map((item) => (
            <div
              key={item}
              className='flex items-center justify-between w-full text-primary'
            >
              <Link
                href='/user'
                className='py-1.5 block hover:underline font-bold text-xl capitalize'
              >
                {item}
              </Link>
              <ChevronRightIcon className='block w-6 h-6 p-1 bg-white rounded-full' />
            </div>
          ))}
          <div className='py-1' />
          {[
            { name: 'My account', href: '/user' },
            { name: 'Wish list', href: '/wishlist' },
            { name: 'Cart', href: '/cart' },
            { name: 'Orders', href: '/orders' },
            { name: 'Support', href: '/support' },
          ].map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className='py-1.5 font-medium hover:underline text-gray-600 capitalize'
            >
              {item.name}
            </Link>
          ))}
        </div>
      </Sidebar.Body>
      <Sidebar.Footer>
        {!uid ? (
          <>
            <Link
              href='/login'
              className='py-2 block w-full border border-black rounded-full text-black text-center mt-1.5 font-medium capitalize'
            >
              Login
            </Link>
            <Link
              href='/createAccount'
              className='py-2 block w-full bg-black font-medium border border-black rounded-full text-white text-center mt-1.5 capitalize'
            >
              Create account
            </Link>
          </>
        ) : (
          <Link href={`/user/${uid}`} className='flex items-center '>
            {displayName || ''}
          </Link>
        )}
      </Sidebar.Footer>
    </Sidebar>
  )
}

export const NavSidebar = ({
  open,
  setOpen,
}: {
  open: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
}) => {
  const user = useAppSelector(selectUser)
  return (
    <Sidebar open={open} setOpen={setOpen}>
      <Sidebar.Header>
        <Logo color='white' bg='black' />
      </Sidebar.Header>
      <Sidebar.Body>
        <div className='flex flex-col items-start space-y-1'>
          {mainmenu.menu1.map((item) => (
            <Link
              key={item}
              href='/products'
              className='py-1.5 hover:underline  font-bold text-3xl capitalize'
            >
              {item}
            </Link>
          ))}
          <div className='py-1' />
          {mainmenu.menu2.map((item) => (
            <Link
              key={item}
              href='/notimplemented'
              className='py-1.5 hover:underline  font-bold text-xl capitalize'
            >
              {item}
            </Link>
          ))}
          <div className='py-2' />
          {mainmenu.menu3.map((item) => (
            <Link
              key={item}
              href='/notimplemented'
              className='py-1.5 hover:underline  capitalize'
            >
              {item}
            </Link>
          ))}
        </div>
      </Sidebar.Body>
      <Sidebar.Footer>
        {!user?.uid ? (
          <>
            <Link
              href='/login'
              className='py-2 block w-full border border-black rounded-full text-black text-center mt-1.5 font-medium capitalize'
            >
              Login
            </Link>
            <Link
              href='/signup'
              className='py-2 block w-full bg-black font-medium border border-black rounded-full text-white text-center mt-1.5 capitalize'
            >
              Create account
            </Link>
          </>
        ) : (
          <Link href={`/user/${user.uid}`} className='flex items-center '>
            {user.displayName || ''}
          </Link>
        )}
      </Sidebar.Footer>
    </Sidebar>
  )
}

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const [openUser, setOpenUser] = useState(false)

  return (
    <nav className='z-50 h-16 bg-white/20 backdrop-blur backdrop-filter'>
      <Container>
        <div className='flex items-center justify-between py-2 '>
          <NavSidebar open={open} setOpen={setOpen} />
          <NavSidebarUser open={openUser} setOpen={setOpenUser} />
          <Logo />
          <div className='flex gap-3'>
            <Link
              className='p-2 '
              href='/products'
              aria-label='Go to search products page.'
            >
              <SearchIcon className='w-5 h-5' />
            </Link>
            <Link
              className='p-2 '
              href='/cart'
              aria-label='Go to shopping cart'
            >
              <ShoppingCartIcon className='w-5 h-5' />
            </Link>
            <button
              onClick={() => setOpenUser((state) => !state)}
              type='button'
              className='p-2 '
              aria-label='Open user menu'
            >
              <UserIcon className='w-5 h-5' />
            </button>

            <button
              type='button'
              onClick={() => setOpen((state) => !state)}
              className='p-2 '
              aria-label='Open main menu'
            >
              <MenuIcon className='w-5 h-5' />
            </button>
          </div>
        </div>
      </Container>
    </nav>
  )
}

export default Navbar
