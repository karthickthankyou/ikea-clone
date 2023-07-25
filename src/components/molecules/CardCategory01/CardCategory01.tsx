import { useRouter } from 'next/router'
import Button from 'src/components/atoms/Button/Button'
import Image from 'src/components/atoms/Image'
import OverlapSpace from '../OverlapSpace/OverlapSpace'

export interface ICardCategory01Props {
  text: string
  href: string
  src: string
  className?: string
}

const CardCategory01 = ({
  text,
  href,
  src,
  className,
}: ICardCategory01Props) => {
  const router = useRouter()
  return (
    <OverlapSpace className={`h-full  group ${className}`}>
      <OverlapSpace.Child className=' -z-10'>
        <Image src={src} alt='' />
      </OverlapSpace.Child>
      <OverlapSpace.Child className='flex items-end justify-center p-8'>
        <Button
          className='transition-all group-hover:-translate-y-2 group-hover:shadow-xl'
          onClick={() => router.push(href)}
          color='white'
        >
          {text}
        </Button>
      </OverlapSpace.Child>
    </OverlapSpace>
  )
}

export default CardCategory01
