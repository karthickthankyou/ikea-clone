import { useRouter } from 'next/router'
import Image from 'src/components/atoms/Image/Image'
import { AlignItems, AllColors, JustifyContent } from 'src/types'
import { bgClasses, colorClasses } from 'src/util'
import ArrowRightIcon from '@heroicons/react/outline/ArrowRightIcon'
import OverlapSpace from '../OverlapSpace/OverlapSpace'

export interface IBannerCard02Props {
  src: string
  href: string
  justify?: JustifyContent
  align?: AlignItems
  bg?: AllColors
  textColor?: AllColors
  text: string
}

const BannerCard02 = ({
  src,
  href,
  justify = 'justify-start',
  align = 'items-start',
  bg = 'white',
  textColor = 'black',
  text,
}: IBannerCard02Props) => {
  const router = useRouter()
  return (
    <OverlapSpace>
      <OverlapSpace.Child className='-z-10'>
        <Image alt='' width={160} height={90} layout='responsive' src={src} />
      </OverlapSpace.Child>
      <OverlapSpace.Child className={`flex ${justify} ${align} p-4`}>
        <div
          className={`${bgClasses[bg]} ${colorClasses[textColor]}  p-3 shadow-xl`}
        >
          <div className='max-w-sm'>{text}</div>
          <button
            type='button'
            className='mt-3'
            onClick={() => router.push(href)}
          >
            <ArrowRightIcon className={`w-4 h-4 ${colorClasses[textColor]}`} />
          </button>
        </div>
      </OverlapSpace.Child>
    </OverlapSpace>
  )
}

export default BannerCard02
