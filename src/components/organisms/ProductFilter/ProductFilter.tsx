import Button, { IButtonProps } from 'src/components/atoms/Button/Button'

import CheckCircleIcon from '@heroicons/react/outline/CheckCircleIcon'
import FilterIcon from '@heroicons/react/solid/FilterIcon'
import { Dispatch, SetStateAction, useState } from 'react'
import Sidebar from 'src/components/molecules/Sidebar/Sidebar'

import { Controller, useForm } from 'react-hook-form'

import { RadioGroup } from '@headlessui/react'

export interface IProductFilterProps {}

type SortTypes =
  | 'Best match'
  | 'Price: low to high'
  | 'Price: high to low'
  | 'Newest'
  | 'Customer rating'
  | 'Name'
  | 'Most popular'

const categories = [
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

type PriceType =
  | '₹0 - 1,999'
  | '₹2,000 - 3,999'
  | '₹4,000 - 5,999'
  | '₹6,000 - 7,999'
  | '₹8,000+'

const prices = [
  '₹0 - 1,999',
  '₹2,000 - 3,999',
  '₹4,000 - 5,999',
  '₹6,000 - 7,999',
  '₹8,000+',
].sort() as PriceType[]

const ratings = ['★', '★★', '★★★', '★★★★', '★★★★★'].sort()

export const filterDefaultValues = {
  price: prices,
  rating: ratings,
  ratings: ratings[0],
  categories,
  sort: 'Best match',
}

const FilterHeading = ({
  title,
  dirty = true,
}: {
  title: string
  dirty: boolean
}) => (
  <div className='relative inline-block mb-6 text-xl font-semibold underline underline-offset-4'>
    {dirty && (
      <div className='absolute top-0 w-3 h-3 rounded-full left-full animate-pulse bg-yellow' />
    )}
    {title}
  </div>
)

const SidebarFilter = ({
  open,
  setOpen,
}: {
  open: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
}) => {
  const {
    watch,
    control,
    formState: { dirtyFields, isDirty },
    reset,
  } = useForm({
    defaultValues: filterDefaultValues,
  })

  const formData = watch()

  return (
    <Sidebar overlayBlur={false} open={open} setOpen={setOpen}>
      <Sidebar.Header>
        <div>Filter</div>
      </Sidebar.Header>
      <Sidebar.Body className='space-y-12'>
        <div>
          <FilterHeading dirty={'sort' in dirtyFields} title='Sort by' />
          <Controller
            name='sort'
            control={control}
            render={({ field: { onChange, value } }) => (
              <RadioGroup value={value} onChange={onChange}>
                <div className='flex flex-col gap-4'>
                  {[
                    'Best match',
                    'Price: low to high',
                    'Price: high to low',
                    'Newest',
                    'Customer rating',
                    'Name',
                    'Most popular',
                  ].map((item) => (
                    <RadioGroup.Option key={item} value={`${item}`}>
                      {({ checked }) => (
                        <span
                          className={`flex select-none items-center bg-white  ${
                            checked
                              ? 'border-primary font-bold text-primary'
                              : 'cursor-pointer text-black '
                          }`}
                        >
                          {item}
                          {checked && (
                            <CheckCircleIcon className='w-4 h-4 ml-2' />
                          )}
                        </span>
                      )}
                    </RadioGroup.Option>
                  ))}
                </div>
              </RadioGroup>
            )}
          />
        </div>
        <div>
          <FilterHeading dirty={'ratings' in dirtyFields} title='Rating' />
          <Controller
            name='ratings'
            control={control}
            render={({ field: { onChange, value } }) => (
              <RadioGroup
                value={value}
                onChange={onChange}
                className='space-y-2 '
              >
                <div className='flex flex-col gap-4'>
                  {['★', '★★', '★★★', '★★★★', '★★★★★'].map((item) => (
                    <RadioGroup.Option key={item} value={`${item}`}>
                      {({ checked }) => (
                        <span
                          className={`flex select-none items-center bg-white  ${
                            checked
                              ? 'border-primary font-bold text-primary'
                              : 'cursor-pointer text-black '
                          }`}
                        >
                          {item}
                          {checked && (
                            <CheckCircleIcon className='w-4 h-4 ml-2' />
                          )}
                        </span>
                      )}
                    </RadioGroup.Option>
                  ))}
                </div>
              </RadioGroup>
            )}
          />
        </div>

        <div>
          <FilterHeading dirty={'price' in dirtyFields} title='Price' />
          <Controller
            name='price'
            control={control}
            render={({ field: { onChange, value } }) => (
              <fieldset className='flex flex-col gap-4'>
                {filterDefaultValues.price.map((c: PriceType) => (
                  <label key={c} className='flex items-start whitespace-nowrap'>
                    <input
                      onChange={() => {
                        const exists = value.includes(c)
                        const newArr = exists
                          ? value.filter((item: string) => item !== c)
                          : [...value, c]
                        onChange(newArr.sort())
                      }}
                      checked={value.includes(c)}
                      type='checkbox'
                      className='flex-shrink-0 w-4 h-4 mr-1'
                      value={value[c as any]}
                    />
                    <div className='text-sm leading-tight select-none'>{c}</div>
                  </label>
                ))}
              </fieldset>
            )}
          />
        </div>

        <div>
          <FilterHeading
            dirty={'categories' in dirtyFields}
            title='Categories'
          />
          <Controller
            name='categories'
            control={control}
            render={({ field: { onChange, value } }) => (
              <fieldset className='flex flex-col gap-4'>
                {filterDefaultValues.categories.map((c) => (
                  <label key={c} className='flex items-start whitespace-nowrap'>
                    <input
                      onChange={() => {
                        const exists = value.includes(c)
                        const newArr = exists
                          ? value.filter((item: string) => item !== c)
                          : [...value, c]
                        onChange(newArr.sort())
                      }}
                      checked={value.includes(c)}
                      type='checkbox'
                      className='flex-shrink-0 w-4 h-4 mr-1'
                      value={value[c as any]}
                    />
                    <div className='text-sm leading-tight select-none'>{c}</div>
                  </label>
                ))}
              </fieldset>
            )}
          />
        </div>
      </Sidebar.Body>
      {isDirty ? (
        <Sidebar.Footer>
          <Button color='white' onClick={() => reset()}>
            Reset
          </Button>
        </Sidebar.Footer>
      ) : null}
    </Sidebar>
  )
}

const FilterButton = ({
  title,
  onClick,
}: {
  title: string
  onClick: IButtonProps['onClick']
}) => (
  <Button
    onClick={onClick}
    className='flex items-center justify-center gap-1'
    color='white'
  >
    <div className='whitespace-nowrap'>{title}</div>
    <FilterIcon className='w-4 h-4 text-black' />
    {/* <ChevronDownIcon className='w-4 h-4 text-black-600 ' /> */}
  </Button>
)

const ProductFilter = () => {
  const [open, setOpen] = useState(false)

  return (
    <div>
      <SidebarFilter open={open} setOpen={setOpen} />

      <FilterButton title='Filter results' onClick={() => setOpen(true)} />
    </div>
  )
}

export default ProductFilter
