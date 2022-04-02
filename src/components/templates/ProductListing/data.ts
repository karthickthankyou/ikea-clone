export type SortTypes =
  | 'Best match'
  | 'Price: low to high'
  | 'Price: high to low'
  | 'Newest'
  | 'Customer rating'
  | 'Most popular'
  | 'Name'

export const sortOptionsList: SortTypes[] = [
  'Best match',
  'Price: low to high',
  'Price: high to low',
  'Newest',
  'Customer rating',
  'Most popular',
  'Name',
]

export const sortOptions: { [key in SortTypes]: any } = {
  'Best match': {},
  'Price: low to high': { price: 'asc' },
  'Price: high to low': { price: 'desc' },
  Newest: { createdAt: 'asc' },
  'Customer rating': { rating: 'desc_nulls_last', reviews: 'desc_nulls_last' },
  'Most popular': { reviews: 'desc_nulls_last' },
  Name: { name: 'asc' },
}

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
].sort()

export type PriceType =
  | '₹0 - 1,999'
  | '₹2,000 - 3,999'
  | '₹4,000 - 5,999'
  | '₹6,000 - 7,999'
  | '₹8,000+'

export const prices = [
  '₹0 - 1,999',
  '₹2,000 - 3,999',
  '₹4,000 - 5,999',
  '₹6,000 - 7,999',
  '₹8,000+',
].sort() as PriceType[]

export const rating = ['★', '★★', '★★★', '★★★★', '★★★★★'].sort()

export const filterDefaultValues = {
  search: '',
  price: [0, 20000] as [number, number],
  rating: rating[0],
  categories,
  sort: 'Best match' as SortTypes,
}

export const filterKeys = Object.keys(filterDefaultValues)

export type SearchFilterType = typeof filterDefaultValues
export type SearchFilterKeys = keyof SearchFilterType
export type DirtyFilterType = {
  search?: boolean | undefined
  price?: boolean[] | undefined
  rating?: boolean | undefined
  categories?: boolean[] | undefined
  sort?: boolean | undefined
}
