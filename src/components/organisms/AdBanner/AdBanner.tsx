import { useRouter } from 'next/router'
import Button from 'src/components/atoms/Button/Button'
import Image from 'src/components/atoms/Image'

export interface IAdBannerProps {
  src: string
  title: string
  description: string
  buttonText: string
  href: string
}

const AdBanner = ({
  src,
  title,
  description,
  buttonText,
  href,
}: IAdBannerProps) => {
  const router = useRouter()
  return (
    <div className='grid grid-cols-1 gap-responsive sm:grid-cols-2'>
      <div>
        <Image alt='' height={300} width={400} src={src} />
      </div>
      <div>
        <div className='text-xl font-bold'>{title}</div>
        <div className='max-w-md mt-2 text-gray-600'>{description}</div>
        <Button
          color='black'
          onClick={() => router.push(href)}
          className='mt-8'
        >
          {buttonText}
        </Button>
      </div>
    </div>
  )
}

export default AdBanner
