import UserIcon from '@heroicons/react/outline/UserIcon'
import ShoppingCartIcon from '@heroicons/react/outline/ShoppingCartIcon'
import ChevronRightIcon from '@heroicons/react/outline/ChevronRightIcon'
import MenuIcon from '@heroicons/react/outline/MenuIcon'
import Link from 'src/components/atoms/Link/Link'
import Sidebar from 'src/components/molecules/Sidebar/Sidebar'
import { Dispatch, SetStateAction, useState } from 'react'
import Button from 'src/components/atoms/Button/Button'
import Logo from 'src/components/atoms/Logo/Logo'
import { signout } from 'src/store/user/userActions'
import { useAppDispatch, useAppSelector } from 'src/store'
import Container from 'src/components/atoms/Container/Container'

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
  const { uid, displayName } = useAppSelector(
    (state) => state.user.data.user
  ) || {
    uid: null,
    displayName: null,
  }
  const { loading } = useAppSelector((state) => state.user)

  const dispatch = useAppDispatch()
  return (
    <Sidebar open={open} setOpen={setOpen}>
      <Sidebar.Header className='pt-24 text-white bg-primary'>
        <div className='flex items-end justify-between'>
          <div className='text-xl'>
            <div className='max-w-xs text-4xl font-bold '>
              Hej{' '}
              {uid ? (
                <span className=' text-yellow'>{displayName}</span>
              ) : (
                'Visitor'
              )}
            </div>
          </div>
          {uid && (
            <Button
              color='white'
              isLoading={loading}
              onClick={() => dispatch(signout())}
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
                href='/help'
                className='py-1.5 block hover:underline font-bold text-xl capitalize'
              >
                {item}
              </Link>
              <ChevronRightIcon className='block w-6 h-6 p-1 bg-white rounded-full' />
            </div>
          ))}
          <div className='py-1' />
          {[
            'Track & manage my order',
            'Shopping list',
            'Planners',
            'Manage account',
          ].map((item) => (
            <Link
              key={item}
              href='/'
              className='py-1.5 font-medium hover:underline text-gray-600 capitalize'
            >
              {item}
            </Link>
          ))}
        </div>
      </Sidebar.Body>
      <Sidebar.Footer>
        {!uid ? (
          <>
            <Link
              href='/login'
              className='py-2 block w-full border border-primary rounded-full text-primary text-center mt-1.5 font-medium capitalize'
            >
              Login
            </Link>
            <Link
              href='/createAccount'
              className='py-2 block w-full bg-primary font-medium border border-primary rounded-full text-white text-center mt-1.5 capitalize'
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
  const user = useAppSelector((state) => state.user.data.user)
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
              href='/advertise'
              className='py-1.5 hover:underline  font-bold text-3xl capitalize'
            >
              {item}
            </Link>
          ))}
          <div className='py-1' />
          {mainmenu.menu2.map((item) => (
            <Link
              key={item}
              href='/advertise'
              className='py-1.5 hover:underline  font-bold text-xl capitalize'
            >
              {item}
            </Link>
          ))}
          <div className='py-2' />
          {mainmenu.menu3.map((item) => (
            <Link
              key={item}
              href='/advertise'
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
              className='py-2 block w-full border border-primary rounded-full text-primary text-center mt-1.5 font-medium capitalize'
            >
              Login
            </Link>
            <Link
              href='/signup'
              className='py-2 block w-full bg-primary font-medium border border-primary rounded-full text-white text-center mt-1.5 capitalize'
            >
              Join now
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
    <nav className='z-50 bg-white/20 backdrop-blur backdrop-filter'>
      <Container>
        <div className='flex items-baseline justify-between py-2 '>
          <NavSidebar open={open} setOpen={setOpen} />
          <NavSidebarUser open={openUser} setOpen={setOpenUser} />
          <Logo />
          <div className='flex gap-3'>
            <button
              onClick={() => setOpenUser((state) => !state)}
              type='button'
              className='p-2 '
              aria-label='Open user menu'
            >
              <UserIcon className='w-5 h-5' />
            </button>
            <Link
              className='p-2 '
              href='/cart'
              aria-label='Go to shopping cart'
            >
              <ShoppingCartIcon className='w-5 h-5' />
            </Link>
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
