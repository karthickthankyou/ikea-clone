import { Children } from 'src/types'

export interface IOverlapSpaceProps {
  children: Children
  className?: string
}

const OverlapSpace = ({ children, className }: IOverlapSpaceProps) => (
  <div className={`grid grid-cols-1 grid-rows-1 ${className}`}>{children}</div>
)

const OverlapSpaceChild = ({ children, className }: IOverlapSpaceProps) => (
  <div className={`col-span-1 col-start-1 row-span-1 row-start-1 ${className}`}>
    {children}
  </div>
)

OverlapSpace.Child = OverlapSpaceChild

export default OverlapSpace
