import Button from 'src/components/atoms/Button/Button'
import BlurredCirle from 'src/components/molecules/BlurredCirle/BlurredCirle'
import OverlapSpace from 'src/components/molecules/OverlapSpace/OverlapSpace'
import ArrowDownIcon from '@heroicons/react/outline/ArrowDownIcon'
import DeveloperCommentary from 'src/components/molecules/DeveloperCommentary/DeveloperCommentary'
import { useRouter } from 'next/router'

export interface IHomeBannerProps {}

const HomeBanner = () => {
  const router = useRouter()
  return (
    <OverlapSpace className='z-10 h-screen overflow-hidden -mt-14'>
      <OverlapSpace.Child>
        <div className='flex flex-col items-center justify-center h-full px-12 text-center md:px-16 lg:px-24 '>
          <div className='my-auto'>
            <div className='max-w-md pb-6 text-5xl font-extrabold tracking-tight text-luxury lg:text-8xl md:text-7xl md:max-w-lg lg:max-w-2xl'>
              Celebrations begin at home.
              <DeveloperCommentary>
                <div>Hello There.</div>
                <div>
                  Welcome to IKEA clone. I am{' '}
                  <span className='font-bold text-primary-200'>
                    Karthick Ragavendran
                  </span>
                  . I am a full stack developer.
                </div>
                <div>This project deals with the below technologies.</div>
                <ul className='list-disk'>
                  <li>UX</li>
                  <li>UI</li>
                  <li>Tailwind</li>
                  <li>Storybook</li>
                  <li>Redux</li>
                  <li>Urql</li>
                  <li>Cypress</li>
                  <li>and more...</li>
                </ul>
                <div>
                  Find the repository{' '}
                  <a
                    href='https://github.com/karthickthankyou/ikea-clone'
                    className='font-bold text-primary-200'
                    rel='noreferrer'
                    target='_blank'
                  >
                    here
                  </a>
                  .
                </div>
              </DeveloperCommentary>
            </div>
            <div className='mt-6 text-md lg:text-xl md:text-lg'>
              Enjoy festive offers from 25 March to 16 April
            </div>
            <Button
              size='xl'
              className='mt-12'
              color='black'
              onClick={() => router.push('/products')}
            >
              Shop now
            </Button>
          </div>
        </div>
      </OverlapSpace.Child>
      {/* animate-spin-60 */}
      <OverlapSpace.Child className='relative -z-20 animate-spin-30 '>
        <div className='absolute -translate-y-1/2 animate-move-right-60 top-3/4 '>
          <BlurredCirle className='fill-yellow/50 ' radius={800} />
        </div>

        <div className='absolute -translate-y-1/2 top-full animate-move-right-48'>
          <BlurredCirle className='fill-red/50 ' radius={600} />
        </div>
        <div className='absolute -translate-y-1/2 top-1/4 animate-move-right-36'>
          <BlurredCirle className='fill-primary/50 ' radius={400} />
        </div>
        <div className='absolute -translate-y-1/2 top-full animate-move-right-24'>
          <BlurredCirle className='fill-green/30 ' radius={200} />
        </div>
        <div className='absolute -translate-y-1/2 top-2/4 animate-move-right-12'>
          <BlurredCirle className='fill-white/50 ' radius={100} />
        </div>
        <div className='absolute -translate-y-1/2 top-1/4 animate-move-right-36'>
          <BlurredCirle className='fill-white/50 ' radius={80} />
        </div>
        <div className='absolute -translate-y-1/2 top-3/4 animate-move-right-60'>
          <BlurredCirle className='fill-white/50 ' radius={60} />
        </div>
        <div className='absolute -translate-y-1/2 top-full animate-move-right-24'>
          <BlurredCirle className='fill-white/50 ' radius={40} />
        </div>
        <div className='absolute top-0 -translate-y-1/2 animate-move-right-48'>
          <BlurredCirle className='fill-white/50 ' radius={20} />
        </div>
      </OverlapSpace.Child>
      <OverlapSpace.Child className='relative -z-20 '>
        <div className='absolute bottom-0 flex items-center justify-center translate-x-1/2 right-1/2'>
          <ArrowDownIcon className='w-8 h-8 right-1/2 animate-bounce' />
        </div>
      </OverlapSpace.Child>
    </OverlapSpace>
  )
}

export default HomeBanner
