import { ReactElement } from 'react'
import Link, { LinkProps } from 'next/link'

export type ILinkProps = {
  href: LinkProps['href']
  className?: string
  onHover?: () => void
  onBlur?: () => void
  children: (string | ReactElement) | (string | ReactElement)[]
} & LinkProps

const MyLink = ({
  href,
  className,
  onHover,
  onBlur,
  children,
  ...linkProps
}: ILinkProps) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <Link href={href} passHref {...linkProps}>
    <a
      role='link'
      tabIndex={0}
      onClick={onHover}
      onKeyDown={onHover}
      onBlur={onBlur}
      className={`underline-offset-4 ${className}`}
    >
      {children}
    </a>
  </Link>
)

export default MyLink
