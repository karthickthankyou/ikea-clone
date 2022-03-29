import { ReactElement } from 'react'

export type CounterStatus = 'idle' | 'loading' | 'failed'

export type User = {
  uid: string | null
  displayName: string | null
  email: string | null
}

export type SigninInfo = {
  email: string
  password: string
}
export type SignupInfo = SigninInfo & {
  displayName?: string
}

export type AsyncData<T> = {
  data: T
  fulfilled?: boolean
  loading?: boolean
  error?: boolean
}

export type AsyncUser = AsyncData<User>

export type Children = ReactElement | ReactElement[] | string

export type NotificationType = {
  id: string
  message: Children
  type?: 'success' | 'error' | 'info' | 'warning'
  position?:
    | 'top-right'
    | 'top-left'
    | 'top-center'
    | 'bottom-right'
    | 'bottom-left'
    | 'bottom-center'
}

export type Viewport = {
  latitude: number
  longitude: number
  zoom: number
}

export type Bounds = [[number, number], [number, number]]

export type PlaceTypesType =
  | 'region'
  | 'postcode'
  | 'district'
  | 'place'
  | 'locality'
  | 'neighborhood'
  | 'address'
  | 'poi'

export type MapSearch = {
  displayName: string
} & Viewport

export type MenuType = {
  [key: string]: {
    title: string
    menu: { subtitle: string; url: string }[]
  }[]
}

export type JustifyContent =
  | 'justify-start'
  | 'justify-end'
  | 'justify-center'
  | 'justify-between'
  | 'justify-around'
  | 'justify-evenly'

export type AlignItems =
  | 'items-start'
  | 'items-end'
  | 'items-center'
  | 'items-baseline'
  | 'items-stretch'

export type AllColors =
  | 'primary'
  | 'black'
  | 'white'
  | 'red'
  | 'green'
  | 'yellow'
  | 'gray'

export type OptionalPick<T, K extends PropertyKey> = Pick<
  T,
  Extract<keyof T, K>
>

export type OptionalExceptFor<T, TRequired extends keyof T> = Partial<T> &
  Pick<T, TRequired>

export type Category =
  | 'Furniture'
  | 'Kitchen & appliances'
  | 'Beds & mattresses'
  | 'Storage & organisation'
  | 'Working from home'
  | 'Textiles'
  | 'Decoration'
  | 'Bathroom products'
  | 'Outdoor products'
  | 'Lighting'
  | 'Carpets, mats & flooring'
  | 'Baby & children'
  | 'Pots & plants'
  | 'Kitchenware & tableware'
  | 'Home electronics'
  | 'Laundry & cleaning'
  | 'Home smart'
  | 'Vinter Collections'
  | 'Home improvement'
  | 'Food & beverages'

export const categories = [
  'Furniture',
  'Kitchen & appliances',
  'Beds & mattresses',
  'Storage & organisation',
  'Working from home',
  'Textiles',
  'Decoration',
  'Bathroom products',
  'Outdoor products',
  'Lighting',
  'Carpets, mats & flooring',
  'Baby & children',
  'Pots & plants',
  'Kitchenware & tableware',
  'Home electronics',
  'Laundry & cleaning',
  'Home smart',
  'Vinter Collections',
  'Home improvement',
  'Food & beverages',
]
