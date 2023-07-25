import Link from 'next/link'

export interface IInfoCardProps {
  Icon: (props: React.ComponentProps<'svg'>) => JSX.Element
  title: string
  description: string
  buttonText?: string
  href: string
  className?: string
}

const InfoCard = ({
  Icon,
  title,
  description,
  buttonText = 'learn more',
  href,
  className,
}: IInfoCardProps) => (
  <div
    className={`flex flex-col group items-center text-center bg-gray-25 border border-gray-50 ${className}`}
  >
    <Icon className='w-6 h-6 mt-2' />
    <div className='mt-2 font-semibold md:text-lg'>{title}</div>
    <div className='mt-1 mb-3 text-sm text-gray-800 lg:text-sm'>
      {description}
    </div>
    <Link
      className='mt-auto mb-4 text-xs underline transition-all group-hover:text-sm group-hover:text-primary group-hover:underline-offset-4 underline-offset-2 group-hover:-translate-y-1'
      href={href}
    >
      {buttonText}
    </Link>
  </div>
)

export default InfoCard
