import { NextPage } from 'next'
import { NextSeo } from 'next-seo'

import { useProductQuery } from 'src/generated'
import ProductPageTemplate from 'src/components/templates/ProductPageTemplate'
import { useRouter } from 'next/router'

const ProductPage: NextPage = () => {
  const { query } = useRouter()
  const id = Number(query.id)

  return (
    <div>
      <ProductPageTemplate productId={id} />
    </div>
  )
}

export default ProductPage
