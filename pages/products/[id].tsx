import { GetStaticProps, NextPage } from 'next'
import { ParsedUrlQuery } from 'querystring'
import { NextSeo } from 'next-seo'

import { client, ssrCache } from 'src/config/urqlClientWonka'

import {
  GetProductDocument,
  useGetProductQuery,
  useInsertProductViewMutation,
  useGetViewedProductsQuery,
} from 'src/generated/graphql'
import ProductPageTemplate from 'src/components/templates/ProductPageTemplate'
import { useRouter } from 'next/router'
import { getQueryParam } from 'src/util/functions'
import { useAppSelector } from 'src/store'
import { useEffect } from 'react'

const ProductPage: NextPage = () => {
  const id = parseInt(getQueryParam(useRouter().query.id), 10)
  const uid = useAppSelector((state) => state.user?.data.user?.uid)
  const [data] = useGetProductQuery({
    variables: { id },
  })

  const title = data.data?.product?.name
  const [, wishlistProduct] = useInsertProductViewMutation()

  useEffect(() => {
    if (uid) wishlistProduct({ uid, pid: id })
  }, [id, uid, wishlistProduct])

  console.log('Data, ', data)

  return (
    <div>
      <NextSeo
        title={`${
          title || 'Product page loading...'
        } - Ikea clone | Karthick Ragavendran`}
        description='Create account with your email or google account.'
      />
      <ProductPageTemplate product={data} />
    </div>
  )
}

interface Params extends ParsedUrlQuery {
  id: string
}

export async function getStaticPaths() {
  return { paths: [], fallback: 'blocking' }
}

// This function gets called at build time
export const getStaticProps: GetStaticProps<{}, Params> = async (context) => {
  // Call an external API endpoint to get posts

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time

  const id = context.params?.id || -90
  await client?.query(GetProductDocument, { id }).toPromise()

  const props = {
    props: JSON.parse(
      JSON.stringify({
        urqlState: ssrCache.extractData() || null,
      })
    ),
  }

  return {
    props,
  }
}

export default ProductPage
