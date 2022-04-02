/* eslint-disable react/jsx-props-no-spreading */
import ProductFilter from 'src/components/organisms/ProductFilter'
import HtmlInput from 'src/components/atoms/HtmlInput'
import { useForm, FormProvider } from 'react-hook-form'
import { useAppSelector } from 'src/store'
import ProductListingResults from 'src/components/organisms/ProductListingResults/ProductListingResults'
import { filterDefaultValues } from './data'
import { useDispatchHomeFilter } from './filterUtils'

export interface IProductListingProps {}

const ProductListing = () => {
  const methods = useForm({ defaultValues: filterDefaultValues })
  const {
    watch,
    formState: { dirtyFields },
  } = methods
  const filterData = watch()
  useDispatchHomeFilter({ filterData, dirtyFields })

  const products = useAppSelector((state) => state.search.products)

  return (
    <div>
      <FormProvider {...methods}>
        <div className='flex mt-responsive'>
          <HtmlInput
            {...methods.register('search')}
            placeholder='Search product name'
            className='inline-block px-2 py-1 border border-1/5'
          />
          <ProductFilter />
        </div>
      </FormProvider>
      <ProductListingResults products={products} />
    </div>
  )
}

export default ProductListing
