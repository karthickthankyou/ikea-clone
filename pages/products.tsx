/* eslint-disable react/jsx-props-no-spreading */

import { NextPage } from 'next'
import { NextSeo } from 'next-seo'
import dynamic from 'next/dynamic'
import { FormProvider, useForm } from 'react-hook-form'
import Container from 'src/components/atoms/Container/Container'

import ProductListing from 'src/components/templates/ProductListing'
import { filterDefaultValues } from 'src/components/templates/ProductListing/data'
import { useDispatchHomeFilter } from 'src/components/templates/ProductListing/filterUtils'
import { useWhenFilterChangesFetchProducts } from 'src/hooks'
import { useAppDispatch, useAppSelector } from 'src/store'
import {
  selectProductsWithWishlist,
  setProductsLimit,
  setProductsOffset,
} from 'src/store/search'

const Pagination = dynamic(
  () => import('../src/components/molecules/Pagination/Pagination'),
  { ssr: false }
)

const SearchProductsPage: NextPage = () => {
  const methods = useForm({ defaultValues: filterDefaultValues })
  const {
    watch,
    formState: { dirtyFields },
  } = methods
  const filterData = watch()
  const dispatch = useAppDispatch()
  const totalCount =
    useAppSelector(
      (state) => state.search.products.data?.products_aggregate.aggregate?.count
    ) || 0
  const offset = useAppSelector((state) => state.search.queryArgs.offset) || 0
  const limit = useAppSelector((state) => state.search.queryArgs.limit) || 0
  useDispatchHomeFilter({ filterData, dirtyFields })
  useWhenFilterChangesFetchProducts()

  const products = useAppSelector((state) => state.search.products)
  const searchProducts = useAppSelector(selectProductsWithWishlist)

  const productsLength = products.data?.products.length
  return (
    <Container>
      <FormProvider {...methods}>
        <NextSeo
          title={`${productsLength} Search page - Ikea clone | Karthick Ragavendran`}
          description='Search products and actually buy.'
        />
        <ProductListing />

        <Pagination
          count={totalCount}
          page={offset / limit}
          rowsPerPage={limit || 0}
          rowsPerPageOptions={[12, 24, 36, 48]}
          onPageChange={(v, c) => dispatch(setProductsOffset(c * limit))}
          onRowsPerPageChange={(v) => {
            dispatch(setProductsLimit(+v.target.value))
          }}
        />
      </FormProvider>
    </Container>
  )
}

export default SearchProductsPage
