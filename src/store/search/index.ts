/* eslint-disable camelcase */
/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { castDraft } from 'immer'
import { SearchFilterType } from 'src/components/templates/ProductListing/data'
import {
  FilterProductsQuery,
  Query_RootProductsArgs,
  Search_Products_Args,
} from 'src/generated/graphql'
import { UseQueryResponse } from 'urql'

export type SearchSlice = {
  productsFilter: Partial<SearchFilterType>
  queryArgs: Query_RootProductsArgs & { args: Search_Products_Args }
  products: UseQueryResponse<FilterProductsQuery, object>[0]
}

const initialState: SearchSlice = {
  productsFilter: {},
  queryArgs: {
    args: {
      search: '',
    },
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
    setProducFilter: (
      state,
      action: PayloadAction<SearchSlice['productsFilter']>
    ) => {
      state.productsFilter = action.payload
    },
    setFilterQueryArgs: (
      state,
      action: PayloadAction<SearchSlice['queryArgs']>
    ) => {
      state.queryArgs = action.payload
    },
    setProducts: (state, action: PayloadAction<SearchSlice['products']>) => {
      state.products = castDraft(action.payload)
    },
  },
})

export const { setProducFilter, setFilterQueryArgs, setProducts } =
  search.actions

export default search.reducer
