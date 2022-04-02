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

export default search.reducer
