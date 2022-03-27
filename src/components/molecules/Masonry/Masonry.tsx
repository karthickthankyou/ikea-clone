import Image from 'src/components/atoms/Image'
import { useWindowSize } from 'react-use'
import { screens } from 'src/util'

export type ColumnsType = '1' | '2' | '3' | '4'
export type GapType = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8'
export interface IMasonryProps {
  items: {
    src: string
  }[]
  gap?: GapType
  columns?: ColumnsType
  shortOne?: number
}

const getDivideBy = (width: number) => {
  if (width >= screens.sm && width < screens.lg) return 2
  if (width > screens.lg) return 3
  return 1
}

const columnClasses: { [key in ColumnsType]: string } = {
  '1': 'columns-1',
  '2': 'lg:columns-2 columns-1',
  '3': 'lg:columns-3 sm:columns-2 columns-1',
  '4': 'lg:columns-4 sm:columns-2 columns-1',
}
const gapClasses: { [key in GapType]: string } = {
  '1': 'gap-1 space-y-1',
  '2': 'gap-2 space-y-2',
  '3': 'gap-3 space-y-3',
  '4': 'gap-4 space-y-4',
  '5': 'gap-5 space-y-5',
  '6': 'gap-6 space-y-6',
  '7': 'gap-7 space-y-7',
  '8': 'gap-8 space-y-8',
}

const Masonry = ({
  items,
  gap = '2',
  shortOne,
  columns = '3',
}: IMasonryProps) => {
  const { width } = useWindowSize()
  const divideBy = getDivideBy(width)
  const shortElement = shortOne || Math.ceil(items.length / divideBy)

  const columnClass = columnClasses[columns]
  const gapClass = gapClasses[gap]

  return (
    <div className={`${gapClass} ${columnClass}`}>
      {items.map((item, index) => (
        <div
          className={`relative p-8 ${
            index === shortElement ? 'h-64' : 'h-96'
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
