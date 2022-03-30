import { Children } from 'src/types'

type Gaps = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8
export interface IParagraphsProps {
  children: Children
  gap?: Gaps
}

const gapClasses: { [key in Gaps]: string } = {
  1: 'gap-1 space-y-1',
  2: 'gap-2 space-y-2',
  3: 'gap-3 space-y-3',
  4: 'gap-4 space-y-4',
  5: 'gap-5 space-y-5',
  6: 'gap-6 space-y-6',
  7: 'gap-7 space-y-7',
  8: 'gap-8 space-y-8',
}

const Paragraphs = ({ children, gap = 4 }: IParagraphsProps) => {
  const gapClassName = gapClasses[gap]
  return (
    <div className={`${gapClassName} xs:columns-2 md:columns-3 xl:columns-4`}>
      {children}
    </div>
  )
}

export default Paragraphs
