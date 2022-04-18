import HomeIcon from '@heroicons/react/solid/HomeIcon'
import HeartIcon from '@heroicons/react/solid/HeartIcon'
import SearchIcon from '@heroicons/react/solid/SearchIcon'
import SupportIcon from '@heroicons/react/solid/SupportIcon'
import LockClosedIcon from '@heroicons/react/solid/LockClosedIcon'
import ShoppingCartIcon from '@heroicons/react/solid/ShoppingCartIcon'
import PhotographIcon from '@heroicons/react/solid/PhotographIcon'
import BriefcaseIcon from '@heroicons/react/solid/BriefcaseIcon'
import UserCircleIcon from '@heroicons/react/solid/UserCircleIcon'
import PlusCircleIcon from '@heroicons/react/solid/PlusCircleIcon'
import InformationCircleIcon from '@heroicons/react/solid/InformationCircleIcon'

export type SectionType = {
  position: { top?: string; right?: string; left?: string; bottom?: string }
  title: string
  href: string
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
  enableCheck?: boolean
}

export const sections: SectionType[] = [
  {
    position: { bottom: '2%', left: '2%' },
    title: 'Home',
    href: '/',
    Icon: HomeIcon,
  },

  {
    title: 'Products',
    position: { top: '80%', right: '40%' },
    href: '/products',
    Icon: SearchIcon,
  },

  {
    title: 'Product page',
    position: { top: '92%', right: '32%' },
    href: '/products/5084',
    Icon: PhotographIcon,
  },

  {
    title: 'Authentication',
    position: { top: '64%', left: '24%' },
    href: '/createAccount',
    Icon: LockClosedIcon,
  },

  {
    title: 'Wishlist',
    position: { top: '8%', right: '76%' },
    href: '/wishlist',
    Icon: HeartIcon,

    enableCheck: true,
  },

  {
    title: 'Cart',
    position: { top: '16%', right: '84%' },
    href: '/cart',
    Icon: ShoppingCartIcon,

    enableCheck: true,
  },

  {
    title: 'Orders',
    position: { top: '0%', right: '92%' },
    href: '/orders',
    Icon: BriefcaseIcon,

    enableCheck: true,
  },
  {
    title: 'User',
    position: { top: '16%', right: '12%' },
    href: '/user',
    Icon: UserCircleIcon,

    enableCheck: true,
  },

  {
    title: 'Post new product',
    position: { top: '8%', right: '2%' },
    href: '/products/new',
    Icon: PlusCircleIcon,
    enableCheck: true,
  },

  {
    title: '404',
    position: { top: '58%', right: '2%' },
    href: '/404',
    Icon: InformationCircleIcon,
  },

  {
    title: 'Support',
    position: { top: '6%', right: '56%' },
    href: '/support',
    Icon: SupportIcon,
  },
]
