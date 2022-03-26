import Image from 'src/components/atoms/Image'
import { useWindowSize } from 'react-use'
import { screens } from 'src/util'

export interface IMasonryProps {
  items: {
    src: string
  }[]
}

const getDivideBy = (width: number) => {
  if (width >= screens.sm && width < screens.lg) return 2
  if (width > screens.lg) return 3
  return 1
}

const Masonry = ({ items }: IMasonryProps) => {
  const { width } = useWindowSize()
  const divideBy = getDivideBy(width)
  const shortOne = Math.ceil(items.length / divideBy)

  return (
    <div className='gap-4 space-y-4 lg:columns-3 columns-1 sm:columns-2'>
      {items.map((item, index) => (
        <div
          className={`relative p-8 shadow-lg shadow-black/10 ${
            index === shortOne ? 'h-64' : 'h-96'
          } break-inside-avoid`}
          key={item.src}
        >
          <Image layout='fill' src={item.src} alt='' />
        </div>
      ))}
    </div>
  )
}

export default Masonry
