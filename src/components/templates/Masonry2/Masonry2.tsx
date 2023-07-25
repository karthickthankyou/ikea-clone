import React, { ReactNode } from 'react'
import { Children } from 'src/types'

export type ColumnsType = '1' | '2' | '3' | '4' | '5'
export type GapType = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8'
export interface IMasonryProps {
  className?: string
  childClassName?: string
  children: ReactNode
  gap?: GapType
  columns?: ColumnsType
  shortOnes?: number[]
  childrenLimit?: number
  heights?: [string, string]
}

const columnClasses: { [key in ColumnsType]: string } = {
  '1': 'columns-1',
  '2': 'columns-2',
  '3': 'columns-3',
  '4': 'columns-4',
  '5': 'columns-5',
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
  className,
  childClassName,
  children,
  gap = '2',
  shortOnes,
  columns = '3',
  childrenLimit,
  heights = ['h-80', 'h-96'],
}: IMasonryProps) => {
  const columnClass = columnClasses[columns]
  const gapClass = gapClasses[gap]

  const limit = childrenLimit || React.Children.count(children)

  return (
    <div className={`${gapClass}  ${columnClass} ${className}`}>
      {React.Children.map(
        children,
        (child, index) =>
          index < limit && (
            <div
              className={`relative overflow-hidden ${childClassName} ${
                shortOnes?.includes(index) ? heights[0] : heights[1]
              } break-inside-avoid`}
            >
              {child}
            </div>
          )
      )}
    </div>
  )
}

export default Masonry
