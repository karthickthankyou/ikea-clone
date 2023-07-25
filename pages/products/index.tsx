import { NextPage } from 'next'
import Container from 'src/components/atoms/Container/Container'
import ProductListing from 'src/components/templates/ProductListing'
import { FormProviderFilter } from 'src/forms'

const SearchProductsPage: NextPage = () => (
  <Container>
    <FormProviderFilter>
      <ProductListing />
    </FormProviderFilter>
  </Container>
)

export default SearchProductsPage
