import Link from 'src/components/atoms/Link/Link'

export interface IInfoCardProps {
  Icon: (props: React.ComponentProps<'svg'>) => JSX.Element
  title: string
  description: string
  buttonText?: string
  href: string
}

const InfoCard = ({
  Icon,
  title,
  description,
  buttonText = 'learn more',
  href,
}: IInfoCardProps) => (
  <div className='flex flex-col items-center text-center bg-gray'>
    <Icon className='w-6 h-6' />
    <div className='mt-2 text-lg font-bold'>{title}</div>
    <div className='mt-1 text-gray-600'>{description}</div>
    <Link className='mt-2' href={href}>
      {buttonText}
    </Link>
  </div>
)

export default InfoCard
