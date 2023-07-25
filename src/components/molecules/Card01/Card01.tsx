import Image from 'src/components/atoms/Image'
import OverlapSpace from 'src/components/molecules/OverlapSpace/OverlapSpace'
import { Children } from 'src/types'
import ArrowRightIcon from '@heroicons/react/outline/ArrowRightIcon'
import Link from 'next/link'
import { ReactElement } from 'react'

export interface ICard01Props {
  href: string
  className?: string
  children: Children
}

const Card01 = ({ className, children, href }: ICard01Props) => (
  <Link href={href} className={`group ${className}`}>
    {children}
  </Link>
)

const Title = ({ children }: { children: Children }) => (
  <div className='text-lg font-semibold break-words md:text-2xl group-hover:underline underline-offset-2'>
    {children}
  </div>
)

const ImageBlock = ({
  src,
  children,
}: {
  src: string
  children: ReactElement
}) => (
  <OverlapSpace>
    <OverlapSpace.Child className='-z-10'>
      <Image src={src} alt='' />
    </OverlapSpace.Child>
    {children}
  </OverlapSpace>
)

const ImageBlockChild = ({
  children,
  className,
}: {
  children: Children
  className?: string
}) => <OverlapSpace.Child className={className}>{children}</OverlapSpace.Child>

const DetailsBlock = ({
  children,
  className = 'p-4 space-y-6 md:p-8',
  flex = 'flex flex-col items-start justify-between',
  bg = 'bg-red-200',
  text = 'text-black',
}: {
  children: Children
  className?: string

  flex?: string
  bg?: string
  text?: string
}) => <div className={`${className} ${flex} ${bg} ${text}`}>{children}</div>

const arrowColors = {
  black: {
    bg: 'bg-black',
    text: 'text-white',
  },
  white: {
    bg: 'bg-white',
    text: 'text-black',
  },
}

export const ArrowButton = ({
  color = 'black',
}: {
  color?: 'black' | 'white'
}) => (
  <button
    type='button'
    className={`inline p-3 font-semibold transition-all ${arrowColors[color].bg} rounded-full cursor-pointer group-hover:-translate-y-2 group-hover:shadow-xl shadow-black/40`}
  >
    <ArrowRightIcon
      className={`w-6 h-6 ${arrowColors[color].text} group-hover:animate-slide`}
    />
  </button>
)

Card01.ImageBlock = ImageBlock
Card01.ImageBlockChild = ImageBlockChild
Card01.DetailsBlock = DetailsBlock
Card01.Title = Title
Card01.ArrowButton = ArrowButton

export default Card01
