import { mount } from '@cypress/react'
import ProductListingResults from './ProductListingResults'

describe('ProductListingResults Component', () => {
  it('ProductListingResults renders', () => {
    mount(
      <ProductListingResults products={{ fetching: false, stale: false }} />
    )
  })
})
