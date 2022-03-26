import Button from 'src/components/atoms/Button/Button'
import BlurredCirle from 'src/components/molecules/BlurredCirle/BlurredCirle'
import OverlapSpace from 'src/components/molecules/OverlapSpace/OverlapSpace'

export interface IHomeBannerProps {}

const HomeBanner = () => (
  <OverlapSpace className='relative overflow-hidden'>
    <OverlapSpace.Child>
      <div className='flex flex-col items-center px-12 py-20 text-center md:px-16 md:py-24 lg:px-24 lg:py-36'>
        <div className='max-w-md text-5xl font-extrabold tracking-tight text-luxury lg:text-8xl md:text-7xl md:max-w-lg lg:max-w-2xl'>
          Celebrations begin at home.
        </div>
        <div className='mt-6 text-md lg:text-3xl md:text-2xl'>
          Enjoy festive offers from 25 March to 16 April
        </div>
        <Button size='xl' className='mt-12'>
          Shop now
        </Button>
      </div>
    </OverlapSpace.Child>
    <OverlapSpace.Child className='relative -z-10'>
      <div className='absolute translate-x-1/2 -translate-y-1/2 top-full right-1/2'>
        <BlurredCirle className='fill-yellow-500/20 -z-10' radius={800} />
      </div>
      <div className='absolute translate-x-1/2 right-full'>
        <BlurredCirle className='fill-red-500/10 -z-10' radius={500} />
      </div>
      <div className='absolute right-0 translate-x-1/2 -translate-y-1/2'>
        <BlurredCirle className='fill-green-500/20 -z-10' radius={290} />
      </div>
      <div className='absolute left-1/2'>
        <BlurredCirle className='fill-primary-500/30 -z-10' radius={200} />
      </div>
    </OverlapSpace.Child>
  </OverlapSpace>
)

export default HomeBanner
