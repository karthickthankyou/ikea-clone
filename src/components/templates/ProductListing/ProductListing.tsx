import ProductFilter from 'src/components/organisms/ProductFilter'
import HtmlInput from 'src/components/atoms/HtmlInput'
import { useFormContext, useWatch } from 'react-hook-form'

import {
  ProductWhereInput,
  SearchProductsQueryVariables,
  useSearchProductsQuery,
} from 'src/generated'
import { useDebouncedValue, useTakeSkip } from 'src/hooks'
import { NextSeo } from 'next-seo'
import { ShowData } from 'src/components/organisms/ShowData'
import { SortTypes, sortOptions } from './data'
import { useEffect, useState } from 'react'
import { FormTypeFilter } from 'src/forms'
import ProductCard01 from 'src/components/molecules/ProductCard01'

export const useConvertSearchFormToVariables = () => {
  const [variables, setVariables] =
    useState<SearchProductsQueryVariables | null>(null)

  const {
    formState: { dirtyFields },
  } = useFormContext<FormTypeFilter>()

  const formData = useWatch<FormTypeFilter>()

  const debouncedForm = useDebouncedValue(formData, 400)

  useEffect(() => {
    if (debouncedForm) {
      const { search, price, rating, category, sort } = debouncedForm

      const productsWhere: Partial<ProductWhereInput> = {}

      if (dirtyFields.search && search) {
        productsWhere.name = { contains: search }
      }
      if (dirtyFields.price && price)
        productsWhere.price = { gte: price[0], lte: price[1] }
      if (dirtyFields.rating)
        productsWhere.rating = { gte: rating?.length || 0 }
      if (dirtyFields.category) productsWhere.category = { in: category }

      const orderBy = sort ? sortOptions[sort as SortTypes] : null
      console.log('productsWhere', productsWhere)
      // Construct the query variables
      const queryVariables: SearchProductsQueryVariables = {
        ...(Object.keys(productsWhere).length
          ? { where: productsWhere }
          : null),
        ...(orderBy ? { orderBy: orderBy } : null),
      }

      setVariables(queryVariables)
    }
  }, [debouncedForm, dirtyFields])

  // Convert form data to query variables
  return { variables }
}

const ProductListing = ({ filterOpen }: { filterOpen?: boolean }) => {
  const { register } = useFormContext<FormTypeFilter>()
  return (
    <div>
      <NextSeo
        title={'Product listing'}
        description='Search products and actually buy.'
      />

      <div className='flex mt-responsive'>
        <HtmlInput
          {...register('search')}
          placeholder='Search product name'
          className='inline-block px-2 py-1 border border-1/5'
        />
        <ProductFilter defaultOpen={filterOpen} />
      </div>
      <ProductListingResults />
    </div>
  )
}

export const ProductListingResults = () => {
  const { variables } = useConvertSearchFormToVariables()
  const debouncedVariables = useDebouncedValue(variables, 400)
  const { setSkip, setTake, skip, take } = useTakeSkip()

  const { loading, data, error } = useSearchProductsQuery({
    variables: { ...debouncedVariables, skip, take },
  })
  return (
    <div>
      <ShowData
        loading={loading}
        pagination={{
          resultCount: data?.products.length,
          totalCount: data?.productAggregate.count,
          setSkip,
          setTake,
          skip,
          take,
        }}
        title={undefined}
      >
        {data?.products.map((product) => (
          <ProductCard01 product={product} key={product.id} />
        ))}
      </ShowData>
    </div>
  )
}

export default ProductListing
