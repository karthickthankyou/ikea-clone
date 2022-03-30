import Image from 'src/components/atoms/Image'
import { Children } from 'src/types'
import { useMeasure } from 'react-use'
import { useEffect, useState } from 'react'
import Button from 'src/components/atoms/Button/Button'

export interface IStoryCardProps {
  src: string
  title: string
  description: Children
}

const StoryParent = ({ children }: { children: Children }) => (
  <div className='grid grid-cols-1 grid-rows-10 sm:grid-cols-5 sm:grid-rows-1'>
    {children}
  </div>
)

const StoryImage = ({ children }: { children: Children }) => (
  <div className='relative col-start-1 grid-rows-3 row-span-3 row-start-1 sm:grid-cols-3 sm:col-span-3 sm:col-start-1 sm:row-start-1 -z-10'>
    {children}
  </div>
)

const StoryContent = ({ children }: { children: Children }) => (
  <div className='flex items-center col-start-1 grid-rows-3 row-span-3 row-start-3 px-3 xs:px-6 sm:px-0 sm:py-12 sm:grid-cols-3 sm:col-span-3 sm:col-start-3 sm:row-start-1 '>
    {children}
  </div>
)

const useHeightLimit = (heightLimit: number) => {
  const [ref, { height }] = useMeasure<HTMLDivElement>()
  const [limitExceeded, setLimitExceeded] = useState(false)

  useEffect(() => {
    if (height >= heightLimit) setLimitExceeded(true)
    if (height < heightLimit) setLimitExceeded(false)
  }, [height, heightLimit, setLimitExceeded])
  return [ref, limitExceeded] as const
}

const StoryDescription = ({ children }: { children: Children }) => {
  const [ref, heightAbove160] = useHeightLimit(240)
  const [showFullText, setShowFullText] = useState(false)
  return (
    <>
      <div
        className={`overflow-hidden ${
          heightAbove160 && !showFullText && 'h-40'
        }`}
      >
        <div className='max-w-md mt-4 space-y-6 leading-7' ref={ref}>
          {children}
        </div>
      </div>

      {heightAbove160 && (
        <Button
          onClick={() => setShowFullText((state) => !state)}
          variant='text'
        >
          {showFullText ? 'Show less' : 'Show more'}
        </Button>
      )}
    </>
  )
}

const StoryCard = ({ src, title, description }: IStoryCardProps) => (
  <StoryParent>
    <StoryContent>
      <div className='w-full p-6 bg-white shadow-xl'>
        <div className='text-gray-600'>Story</div>
        <div className='mt-1 text-2xl font-bold'>{title}</div>
        <StoryDescription>{description}</StoryDescription>
      </div>
    </StoryContent>
    <StoryImage>
      <Image alt='' className='w-full' src={src} />
    </StoryImage>
  </StoryParent>
)

export default StoryCard
