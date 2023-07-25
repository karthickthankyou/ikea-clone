import { ReactElement } from 'react'
import Link, { LinkProps } from 'next/link'

export type ILinkProps = {
  href: LinkProps['href']
  className?: string
  onHover?: () => void
  onBlur?: () => void
  children: (string | ReactElement) | (string | ReactElement)[]
} & LinkProps

const MyLink = ({ href, children, ...linkProps }: ILinkProps) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <Link href={href} passHref {...linkProps}>
    {children}
  </Link>
)

export default MyLink
