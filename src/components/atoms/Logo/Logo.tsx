import Link from '../Link'

type Colors =
  | 'primary'
  | 'black'
  | 'white'
  | 'red'
  | 'green'
  | 'yellow'
  | 'gray'

export interface ILogoProps {
  color?: Colors
  bg?: Colors
}

const colorClasses: { [key in Colors]: string } = {
  primary: 'text-primary',
  black: 'text-black',
  white: 'text-white',
  red: 'text-red',
  yellow: 'text-yellow',
  green: 'text-green',
  gray: 'text-gray',
}
const bgClasses: { [key in Colors]: string } = {
  primary: 'bg-primary',
  black: 'bg-black',
  white: 'bg-white',
  red: 'bg-red',
  yellow: 'bg-yellow',
  green: 'bg-green',
  gray: 'bg-gray',
}

const Logo = ({ color = 'primary', bg = 'yellow' }: ILogoProps) => (
  <Link
    href='/'
    className={`py-0.5 px-1 text-2xl font-black inline-block leading-none tracking-tight ${bgClasses[bg]} ${colorClasses[color]} `}
  >
    IKEA
  </Link>
)

export default Logo
