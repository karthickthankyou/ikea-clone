import { AllColors } from 'src/types'

export const screens = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
}

export const colorClasses: { [key in AllColors]: string } = {
  primary: 'text-primary',
  black: 'text-black',
  white: 'text-white',
  red: 'text-red',
  yellow: 'text-yellow',
  green: 'text-green',
  gray: 'text-gray',
}
export const bgClasses: { [key in AllColors]: string } = {
  primary: 'bg-primary',
  black: 'bg-black',
  white: 'bg-white',
  red: 'bg-red',
  yellow: 'bg-yellow',
  green: 'bg-green',
  gray: 'bg-gray',
}
export const bgClassesTransparent: { [key in AllColors]: string } = {
  primary: 'bg-primary/80',
  black: 'bg-black/80',
  white: 'bg-white/80',
  red: 'bg-red/80',
  yellow: 'bg-yellow/80',
  green: 'bg-green/80',
  gray: 'bg-gray/80',
}
