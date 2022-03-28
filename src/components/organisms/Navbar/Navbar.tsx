import UserIcon from '@heroicons/react/outline/UserIcon'
import ShoppingCartIcon from '@heroicons/react/outline/ShoppingCartIcon'
import ChevronRightIcon from '@heroicons/react/outline/ChevronRightIcon'
import MenuIcon from '@heroicons/react/outline/MenuIcon'
import Link from 'src/components/atoms/Link/Link'
import Sidebar from 'src/components/molecules/Sidebar/Sidebar'
import { Dispatch, SetStateAction, useState } from 'react'
import Button from 'src/components/atoms/Button/Button'
import Logo from 'src/components/atoms/Logo/Logo'

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
  uid,
  displayName,
}: {
  open: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
  uid: string | null | undefined
  displayName: string | null | undefined
}) => (
  <Sidebar open={open} setOpen={setOpen}>
    <Sidebar.Header setOpen={setOpen} className='pt-24 text-white bg-primary'>
      <div className='flex items-end justify-between'>
        <div className='text-xl'>
          <div className='max-w-xs text-4xl font-bold '>
            Hej <span className=' text-yellow'>{displayName}</span>
          </div>
        </div>
        <Button color='white'>Log out</Button>
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
          'Track & manage my order',
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
            href='/signup'
            className='py-2 block w-full bg-primary font-medium border border-primary rounded-full text-white text-center mt-1.5 capitalize'
          >
            Join now
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

export const NavSidebar = ({
  open,
  setOpen,
  uid,
  displayName,
}: {
  open: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
  uid: string | null | undefined
  displayName: string | null | undefined
}) => (
  <Sidebar open={open} setOpen={setOpen}>
    <Sidebar.Header setOpen={setOpen}>
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
      {!uid ? (
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
        <Link href={`/user/${uid}`} className='flex items-center '>
          {displayName || ''}
        </Link>
      )}
    </Sidebar.Footer>
  </Sidebar>
)

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const [openUser, setOpenUser] = useState(false)
  const uid = '234'
  const userDisplayName = 'Karthick Ragavendran'
  return (
    <nav className='flex items-baseline justify-between'>
      <NavSidebar
        open={open}
        setOpen={setOpen}
        uid={uid}
        displayName={userDisplayName}
      />
      <NavSidebarUser
        open={openUser}
        setOpen={setOpenUser}
        uid={uid}
        displayName={userDisplayName}
      />
      <Logo />
      <div className='flex gap-3'>
        <button
          onClick={() => setOpenUser((state) => !state)}
          type='button'
          className='p-2 border rounded-full'
        >
          <UserIcon className='w-5 h-5' />
        </button>
        <Link className='p-2 border rounded-full' href='/cart'>
          <ShoppingCartIcon className='w-5 h-5' />
        </Link>
        <button
          type='button'
          onClick={() => setOpen((state) => !state)}
          className='p-2 border rounded-full'
        >
          <MenuIcon className='w-5 h-5' />
        </button>
      </div>
    </nav>
  )
}

export default Navbar
