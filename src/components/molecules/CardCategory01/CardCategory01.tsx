import { useRouter } from 'next/router'
import Button from 'src/components/atoms/Button/Button'
import Image from 'src/components/atoms/Image'
import OverlapSpace from '../OverlapSpace/OverlapSpace'

export interface ICardCategory01Props {
  text: string
  href: string
  src: string
}

const CardCategory01 = ({ text, href, src }: ICardCategory01Props) => {
  const router = useRouter()
  return (
    <OverlapSpace className='mt-4'>
      <OverlapSpace.Child className='-z-10'>
        <Image src={src} alt='' />
      </OverlapSpace.Child>
      <OverlapSpace.Child className='flex items-end justify-center p-8'>
        <Button onClick={() => router.push(href)} color='white'>
          {text}
        </Button>
      </OverlapSpace.Child>
    </OverlapSpace>
  )
}

export default CardCategory01
