/* eslint-disable react/jsx-props-no-spreading */

import { NextPage } from 'next'
import { NextSeo } from 'next-seo'
import { FormProvider, useForm } from 'react-hook-form'
import Container from 'src/components/atoms/Container/Container'

import ProductListing from 'src/components/templates/ProductListing'
import { filterDefaultValues } from 'src/components/templates/ProductListing/data'
import { useDispatchHomeFilter } from 'src/components/templates/ProductListing/filterUtils'
import { useWhenFilterChangesFetchProducts } from 'src/hooks'
import { useAppDispatch, useAppSelector } from 'src/store'
import { setProductsLimit, setProductsOffset } from 'src/store/search'

import dynamic from 'next/dynamic'

const Pagination = dynamic(
  () => import('src/components/molecules/Pagination/Pagination')
)

const LoginPage: NextPage = () => {
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

  return (
    <Container>
      <FormProvider {...methods}>
        <NextSeo
          title='Search page - Ikea clone | Karthick Ragavendran'
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
            console.log('V ', v)
            dispatch(setProductsLimit(+v.target.value))
          }}
        />
      </FormProvider>
    </Container>
  )
}

export default LoginPage
