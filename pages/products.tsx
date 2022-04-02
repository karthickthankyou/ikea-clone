/* eslint-disable react/jsx-props-no-spreading */
import { NextPage } from 'next'
import { NextSeo } from 'next-seo'
import { FormProvider, useForm } from 'react-hook-form'
import Container from 'src/components/atoms/Container/Container'
import ProductListing from 'src/components/templates/ProductListing'
import { filterDefaultValues } from 'src/components/templates/ProductListing/data'
import { useDispatchHomeFilter } from 'src/components/templates/ProductListing/filterUtils'
import { useSearchProductsQuery } from 'src/generated/graphql'
import { useWhenFilterChangesFetchProducts } from 'src/hooks'
import { useAppSelector } from 'src/store'

const LoginPage: NextPage = () => {
  const methods = useForm({ defaultValues: filterDefaultValues })
  const {
    watch,
    formState: { dirtyFields },
  } = methods
  const filterData = watch()
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
      </FormProvider>
    </Container>
  )
}

export default LoginPage
