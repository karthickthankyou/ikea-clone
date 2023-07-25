import { ProductOrderByWithRelationInput, SortOrder } from 'src/generated'

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

export const sortOptions: {
  [key in SortTypes]: ProductOrderByWithRelationInput[] | null
} = {
  'Best match': null,
  'Price: low to high': [{ price: SortOrder.Asc }],
  'Price: high to low': [{ price: SortOrder.Desc }],
  Newest: [{ createdAt: SortOrder.Asc }],
  'Customer rating': [{ rating: SortOrder.Desc }, { reviews: SortOrder.Desc }],
  'Most popular': [{ reviews: SortOrder.Desc }],
  Name: [{ name: SortOrder.Asc }],
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

export type RatingTypes = '*' | '**' | '***' | '****' | '*****'

export const ratings: RatingTypes[] = [
  '★',
  '★★',
  '★★★',
  '★★★★',
  '★★★★★',
].sort() as RatingTypes[]

export const filterDefaultValues = {
  search: '',
  price: [0, 20000] as [number, number],
  rating: ratings[0],
  category: categories,
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
