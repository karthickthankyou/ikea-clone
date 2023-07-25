import ArrowRightIcon from '@heroicons/react/solid/ArrowRightIcon'

import Image from 'src/components/atoms/Image'
import Link from 'next/link'
import { Children } from 'src/types'
import OverlapSpace from '../OverlapSpace/OverlapSpace'

export type DetailsColor =
  | 'yellow'
  | 'primary'
  | 'gray'
  | 'red'
  | 'yellowDark'
  | 'primaryDark'
  | 'grayDark'
  | 'redDark'
  | 'black'
  | 'white'

export const colors: {
  [key in DetailsColor]: {
    text: string
    bg: string
    bgTransparent: string
    contrastBg: string
    contrastText: string
  }
} = {
  yellow: {
    contrastBg: 'bg-black',
    contrastText: 'text-black',
    text: 'text-yellow-200',
    bg: 'bg-yellow-200',
    bgTransparent: 'bg-yellow-200/10',
  },
  primary: {
    contrastBg: 'bg-black',
    contrastText: 'text-black',
    text: 'text-primary-100',
    bg: 'bg-primary-100',
    bgTransparent: 'bg-primary-100/10',
  },
  gray: {
    contrastBg: 'bg-black',
    contrastText: 'text-black',
    text: 'text-gray-50',
    bg: 'bg-gray-50',
    bgTransparent: 'bg-gray-50/10',
  },
  red: {
    contrastBg: 'bg-black',
    contrastText: 'text-black',
    text: 'text-red-200',
    bg: 'bg-red-200',
    bgTransparent: 'bg-red-200/10',
  },
  yellowDark: {
    contrastBg: 'bg-white',
    contrastText: 'text-white',
    text: 'text-yellow-700',
    bg: 'bg-yellow-700',
    bgTransparent: 'bg-yellow-700/10',
  },
  primaryDark: {
    contrastBg: 'bg-white',
    contrastText: 'text-white',
    text: 'text-primary-600',
    bg: 'bg-primary-600',
    bgTransparent: 'bg-primary-600/10',
  },
  grayDark: {
    contrastBg: 'bg-white',
    contrastText: 'text-white',
    text: 'text-gray-600',
    bg: 'bg-gray-600',
    bgTransparent: 'bg-gray-600/10',
  },
  redDark: {
    contrastBg: 'bg-white',
    contrastText: 'text-white',
    text: 'text-red-600',
    bg: 'bg-red-600',
    bgTransparent: 'bg-red-600/10',
  },
  black: {
    contrastBg: 'bg-white',
    contrastText: 'text-white',
    text: 'text-black',
    bg: 'bg-black',
    bgTransparent: 'bg-black/10',
  },
  white: {
    contrastBg: 'bg-black',
    contrastText: 'text-black',
    text: 'text-white',
    bg: 'bg-white',
    bgTransparent: 'bg-white/10',
  },
}

export interface IColorCardProps {
  title: string
  src: string
  children: Children
  detailsColor: DetailsColor
}

const ColorCard = ({
  src,
  children,
  title,
  detailsColor = 'yellow',
}: IColorCardProps) => {
  const contrastBgCls = colors[detailsColor].contrastBg
  const contrastTextCls = colors[detailsColor].contrastText
  const textCls = colors[detailsColor].text
  const bgCls = colors[detailsColor].bg
  const bgTransparentCls = colors[detailsColor].bgTransparent
  return (
    <div className={`h-full ${bgTransparentCls}`}>
      <OverlapSpace>
        <OverlapSpace.Child className='-z-10'>
          <Image src={src} alt='' className='w-full aspect-square' />
        </OverlapSpace.Child>
        <OverlapSpace.Child className='p-responsive'>
          {children}
        </OverlapSpace.Child>
      </OverlapSpace>
      <div
        className={`flex flex-col justify-between items-start group gap-6 p-responsive ${bgCls}`}
      >
        <div
          className={`text-lg h-16  lg:h-24 line-clamp-2 font-semibold break-words md:text-xl lg:text-2xl group-hover:underline underline-offset-2 ${contrastTextCls} `}
        >
          {title}
        </div>
        <Link
          href='/products'
          className={`inline p-3 mt-auto font-semibold transition-all ${contrastBgCls} rounded-full cursor-pointer group-hover:-translate-y-2 group-hover:shadow-xl shadow-black/40`}
        >
          <ArrowRightIcon
            className={`w-6 h-6 ${textCls} group-hover:animate-slide`}
          />
        </Link>
      </div>
    </div>
  )
}

export default ColorCard
