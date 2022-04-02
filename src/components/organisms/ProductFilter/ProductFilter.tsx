import Button, { IButtonProps } from 'src/components/atoms/Button/Button'

import CheckCircleIcon from '@heroicons/react/outline/CheckCircleIcon'
import FilterIcon from '@heroicons/react/solid/FilterIcon'
import { Dispatch, SetStateAction, useState } from 'react'
import Sidebar from 'src/components/molecules/Sidebar/Sidebar'

import { Controller, useFormContext } from 'react-hook-form'

import { RadioGroup } from '@headlessui/react'
import {
  filterDefaultValues,
  PriceType,
  sortOptionsList,
} from 'src/components/templates/ProductListing/data'
import RangeSlider from 'src/components/molecules/RangeSlider/RangeSlider'

export interface IProductFilterProps {}

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
  } = useFormContext()

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
                  {sortOptionsList.map((item) => (
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
              <RangeSlider
                step={1000}
                marks
                onChange={onChange}
                value={value}
                initialData={filterDefaultValues.price}
                labelFormat={(sliderValue) =>
                  `Rs.${sliderValue.toLocaleString()}`
                }
              />
            )}
          />
        </div>

        <div>
          <FilterHeading dirty={'category' in dirtyFields} title='Category' />
          <Controller
            name='category'
            control={control}
            render={({ field: { onChange, value } }) => (
              <fieldset className='flex flex-col gap-4'>
                {filterDefaultValues.category.map((c) => (
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

      <Sidebar.Footer show={Object.keys(dirtyFields).length > 0}>
        <Button color='white' onClick={() => reset()}>
          Reset
        </Button>
      </Sidebar.Footer>
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
