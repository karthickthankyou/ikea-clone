/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { castDraft } from 'immer'
import { GetUserProductsQuery } from 'src/generated/graphql'
import { UseQueryResponse } from 'urql'

import { RootState } from '..'

export type UserProductSliceType = {
  userProducts: UseQueryResponse<GetUserProductsQuery, object>[0]
}

export const initialState: UserProductSliceType = {
  userProducts: {
    stale: false,
    fetching: false,
  },
}

const userProductSlice = createSlice({
  name: 'userProduct',
  initialState,
  reducers: {
    setUserProducts: (
      state,
      action: PayloadAction<UserProductSliceType['userProducts']>
    ) => {
      state.userProducts = castDraft(action.payload)
    },
  },
})

export const { setUserProducts } = userProductSlice.actions

export const selectUserProducts = (state: RootState) =>
  state.userProducts.userProducts

export default userProductSlice.reducer
