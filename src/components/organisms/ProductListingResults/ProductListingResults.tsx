import ProductCard01, {
  ProductCard01Skeleton,
} from 'src/components/molecules/ProductCard01/ProductCard01'
import { FilterProductsQuery } from 'src/generated/graphql'
import { useAppSelector } from 'src/store'
import { selectProductsWithWishlist } from 'src/store/search'
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

const ProductListingResults = () => {
  const limit = useAppSelector((state) => state.search.queryArgs.limit) || 0
  const products = useAppSelector(selectProductsWithWishlist)

  if (products.fetching)
    return (
      <Grid>
        {Array.from(Array(limit).keys()).map((item) => (
          <ProductCard01Skeleton key={item} />
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
          id={item.id}
          key={item.id}
          title={item.name}
          description={`${item.category} | ${item.subCategory}`}
          src='https://res.cloudinary.com/thankyou/image/upload/v1648218985/nike/ikea/sofa-01_fgsi8y.jpg'
          rating={item.rating}
          price={item.price}
          oldPrice={item.oldPrice}
          reviews={item.reviews}
          // Todo: Fix this problem. We made wishlist available in the item.
          // @ts-ignore
          wishlisted={item.wishlisted}
        />
      ))}
    </Grid>
  )
}

export default ProductListingResults
