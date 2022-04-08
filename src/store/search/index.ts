/* eslint-disable camelcase */
/* eslint-disable no-param-reassign */
import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit'
import produce, { castDraft } from 'immer'
import { SearchFilterType } from 'src/components/templates/ProductListing/data'
import {
  FilterProductsQuery,
  Query_RootProductsArgs,
  Search_Products_Args,
  User_Products_Type_Enum,
} from 'src/generated/graphql'
import { UseQueryResponse } from 'urql'
import { RootState } from '..'
import { selectUserProducts } from '../userProducts/userProductsSlice'

export type SearchSlice = {
  productsFilter: Partial<SearchFilterType>
  queryArgs: Query_RootProductsArgs & { args: Search_Products_Args }
  products: UseQueryResponse<FilterProductsQuery, object>[0]
}

export const initialState: SearchSlice = {
  productsFilter: {},
  queryArgs: {
    args: {
      search: '',
    },
    offset: 0,
    limit: 12,
  },
  products: {
    stale: false,
    fetching: false,
  },
}

const search = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setProductFilter: (
      state,
      action: PayloadAction<SearchSlice['productsFilter']>
    ) => {
      state.productsFilter = action.payload
    },
    setFilterQueryArgs: (
      state,
      action: PayloadAction<SearchSlice['queryArgs']>
    ) => {
      state.queryArgs.args = action.payload.args
      state.queryArgs.where = action.payload.where
      state.queryArgs.order_by = action.payload.order_by
      state.queryArgs.offset = 0
    },
    setProducts: (state, action: PayloadAction<SearchSlice['products']>) => {
      state.products = castDraft(action.payload)
    },
    setProductsOffset: (
      state,
      action: PayloadAction<SearchSlice['queryArgs']['offset']>
    ) => {
      const offset = action.payload && action.payload < 0 ? 0 : action.payload
      state.queryArgs.offset = offset
    },
    setProductsLimit: (
      state,
      action: PayloadAction<SearchSlice['queryArgs']['limit']>
    ) => {
      state.queryArgs.limit = action.payload
    },
  },
})

export const {
  setProductFilter,
  setFilterQueryArgs,
  setProducts,
  setProductsOffset,
  setProductsLimit,
} = search.actions

export const selectSearchProducts = (state: RootState) => state.search.products

export type SimpleUserProducts = {
  status?: User_Products_Type_Enum
  fetching?: boolean
  error?: boolean
}

type ProductsWithWishlist = NonNullable<
  SearchSlice['products']['data']
>['products'][number] & {
  userProducts?: SimpleUserProducts
}

export type ProductsWishlisted = SearchSlice['products'] & {
  data?:
    | (Omit<SearchSlice['products']['data'], 'products'> & {
        products: Array<ProductsWithWishlist>
      })
    | undefined
}

export const selectProductsWithWishlist = createSelector(
  [selectSearchProducts, selectUserProducts],
  (products, userProducts): ProductsWishlisted => {
    const wishlistedProducts = userProducts.data?.user_products || []

    console.log('userProducts ', userProducts)
    const productsUpdated = products.data?.products.map((product) => {
      if (userProducts.fetching)
        return {
          ...product,
          userProducts: {
            fetching: true,
          },
        }

      const isWishlisted = wishlistedProducts.find(
        (wishlistedProduct) => wishlistedProduct.pid === product.id
      )
      if (!isWishlisted) return product

      return {
        ...product,
        userProducts: {
          status: isWishlisted.type,
        },
      }
    })

    return produce(products, (productDraft) => {
      if (productDraft?.data?.products) {
        productDraft.data.products = productsUpdated!
      }
    })
  }
)

export default search.reducer
