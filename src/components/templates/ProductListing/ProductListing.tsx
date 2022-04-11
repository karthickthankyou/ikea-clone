/* eslint-disable react/jsx-props-no-spreading */
import ProductFilter from 'src/components/organisms/ProductFilter'
import HtmlInput from 'src/components/atoms/HtmlInput'
import { useForm, FormProvider } from 'react-hook-form'

import ProductListingResults from 'src/components/organisms/ProductListingResults/ProductListingResults'
import { UseQueryState } from 'urql/dist/types/hooks/useQuery'
import { FilterProductsQuery } from 'src/generated/graphql'
import { filterDefaultValues } from './data'
import { useDispatchHomeFilter } from './filterUtils'

export interface IProductListingProps {
  products: UseQueryState<FilterProductsQuery, object>
}

const ProductListing = ({ filterOpen }: { filterOpen?: boolean }) => {
  const methods = useForm({ defaultValues: filterDefaultValues })
  const {
    watch,
    formState: { dirtyFields },
  } = methods
  const filterData = watch()
  useDispatchHomeFilter({ filterData, dirtyFields })

  return (
    <div>
      <FormProvider {...methods}>
        <div className='flex mt-responsive'>
          <HtmlInput
            {...methods.register('search')}
            placeholder='Search product name'
            className='inline-block px-2 py-1 border border-1/5'
          />
          <ProductFilter defaultOpen={filterOpen} />
        </div>
      </FormProvider>
      <ProductListingResults />
    </div>
  )
}

export default ProductListing
