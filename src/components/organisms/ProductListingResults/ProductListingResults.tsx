import ProductCard01 from 'src/components/molecules/ProductCard01/ProductCard01'
import Skeleton from 'src/components/molecules/Skeleton/Skeleton'
import { FilterProductsQuery } from 'src/generated/graphql'
import { Children } from 'src/types'
import { UseQueryState } from 'urql'

export interface IProductListingResultsProps {
  products: UseQueryState<FilterProductsQuery, object>
}

const Grid = ({ children }: { children: Children }) => (
  <div className='grid grid-cols-3 mt-responsive gap-responsive'>
    {children}
  </div>
)

const ProductListingResults = ({ products }: IProductListingResultsProps) => {
  if (products.fetching)
    return (
      <Grid>
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <Skeleton key={item} className='w-full h-64' />
        ))}
      </Grid>
    )
  if (products.error)
    return (
      <div className='flex items-center justify-center h-screen50'>
        Oops something went wrong
      </div>
    )

  const productList = products.data?.products || []

  if (productList.length === 0)
    return (
      <div className='flex items-center justify-center h-screen50'>
        Oops. No results found.
      </div>
    )
  return (
    <Grid>
      {productList.map((item) => (
        <ProductCard01
          key={item.id}
          title={item.name}
          description={`${item.category} | ${item.subCategory}`}
          src='https://res.cloudinary.com/thankyou/image/upload/v1648218985/nike/ikea/sofa-01_fgsi8y.jpg'
          rating={item.rating}
          price={item.price}
          oldPrice={item.oldPrice}
          reviews={item.reviews}
        />
      ))}
    </Grid>
  )
}

export default ProductListingResults
