/* eslint-disable react/jsx-props-no-spreading */
export type IBlurredCirleProps = {
  radius?: number
} & React.SVGProps<SVGSVGElement>

const BlurredCirle = ({
  radius = 100,
  className,
  ...props
}: IBlurredCirleProps) => (
  <svg height={radius} width={radius} className={` ${className}`} {...props}>
    <circle cx={radius / 2} cy={radius / 2} r={radius / 3} filter='url(#f1)' />
    <defs>
      <filter id='f1'>
        <feGaussianBlur in='SourceGraphic' stdDeviation={radius / 160} />
      </filter>
    </defs>
  </svg>
)

export default BlurredCirle
