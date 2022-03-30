import Button from 'src/components/atoms/Button/Button'
import BlurredCirle from 'src/components/molecules/BlurredCirle/BlurredCirle'
import OverlapSpace from 'src/components/molecules/OverlapSpace/OverlapSpace'
import ArrowDownIcon from '@heroicons/react/outline/ArrowDownIcon'

export interface IHomeBannerProps {}

const HomeBanner = () => (
  <OverlapSpace className='z-10 h-screen overflow-hidden -mt-14'>
    <OverlapSpace.Child>
      <div className='flex flex-col items-center justify-center h-full px-12 text-center md:px-16 lg:px-24 '>
        <div className='my-auto'>
          <div className='max-w-md pb-6 text-5xl font-extrabold tracking-tight text-luxury lg:text-8xl md:text-7xl md:max-w-lg lg:max-w-2xl'>
            Celebrations begin at home.
          </div>
          <div className='mt-6 text-md lg:text-xl md:text-lg'>
            Enjoy festive offers from 25 March to 16 April
          </div>
          <Button
            size='xl'
            className='mt-12'
            color='black'
            onClick={() => console.log('Clicked')}
          >
            Shop now
          </Button>
        </div>
      </div>
    </OverlapSpace.Child>
    <OverlapSpace.Child className='relative -z-20'>
      <div className='absolute translate-x-1/2 -translate-y-1/2 top-full right-1/2'>
        <BlurredCirle className='fill-yellow/20 ' radius={800} />
      </div>
      <div className='absolute translate-x-1/2 right-full'>
        <BlurredCirle className='fill-red/10 ' radius={500} />
      </div>
      <div className='absolute right-0 translate-x-1/2 -translate-y-1/2'>
        <BlurredCirle className='fill-green/20 ' radius={290} />
      </div>
      <div className='absolute left-1/2'>
        <BlurredCirle className='fill-primary/30 ' radius={200} />
      </div>
      <div className='absolute bottom-0 flex items-center justify-center translate-x-1/2 right-1/2'>
        <ArrowDownIcon className='w-8 h-8 rounded-full bg-white/10 right-1/2 animate-bounce' />
      </div>
    </OverlapSpace.Child>
  </OverlapSpace>
)

export default HomeBanner
