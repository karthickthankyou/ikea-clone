/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { WritableDraft } from 'immer/dist/internal'
import { RootState } from '..'
import { AsyncData, AsyncUser, User } from '../../types'
import {
  signup,
  signin,
  signout,
  forgotPassword,
  googleSignin,
} from './userActions'

type Claims = {
  'x-hasura-default-role': string
  'x-hasura-user-id': string
  'x-hasura-allowed-roles': string[]
}

export type UserSliceType = AsyncData<{
  user: User | null
  claims: Claims | null
}>

export const initialState: UserSliceType = {
  data: {
    user: null,
    claims: null,
  },
  fulfilled: true,
  loading: false,
  error: false,
}

// An utility function that reducer redundant code in extra reducers.

const setStatus =
  ({
    fulfilled = false,
    loading = false,
    error = false,
  }: {
    fulfilled?: boolean
    loading?: boolean
    error?: boolean
  }) =>
  (state: WritableDraft<AsyncUser>) => {
    state.fulfilled = fulfilled
    state.loading = loading
    state.error = error
  }

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserSliceType['data']>) => {
      state.data = action.payload
      state.fulfilled = true
      state.loading = false
      state.error = false
    },

    resetUser: () => initialState,
  },
  extraReducers: () => ({
    // We manage only the response status here. The setUser is set from the auth listener.

    // Default extra reducer will look like.
    //   [signup.pending.toString()]: (state, action)=> {
    //     state.loading = false
    //   },

    [signup.pending.toString()]: setStatus({ loading: true }),
    [signup.fulfilled.toString()]: setStatus({ fulfilled: true }),
    [signup.rejected.toString()]: setStatus({ error: true }),

    [signin.pending.toString()]: setStatus({ loading: true }),
    [signin.fulfilled.toString()]: setStatus({ fulfilled: true }),
    [signin.rejected.toString()]: setStatus({ error: true }),

    [signout.pending.toString()]: setStatus({ loading: true }),
    [signout.fulfilled.toString()]: setStatus({ fulfilled: true }),
    [signout.rejected.toString()]: setStatus({ error: true }),

    [forgotPassword.pending.toString()]: setStatus({ loading: true }),
    [forgotPassword.fulfilled.toString()]: setStatus({ fulfilled: true }),
    [forgotPassword.rejected.toString()]: setStatus({ error: true }),

    [googleSignin.pending.toString()]: setStatus({ loading: true }),
    [googleSignin.fulfilled.toString()]: setStatus({ fulfilled: true }),
    [googleSignin.rejected.toString()]: setStatus({ error: true }),

    // We can do something like below to avoid redundancy. But it is not flexible.
    // ...Object.fromEntries(
    //   [
    //     signup.pending,
    //     signin.pending,
    //     signout.pending,
    //     forgotPassword.pending,
    //     googleSignin.pending,
    //   ].map((key) => [key.toString(), setStatus({ loading: true })])
    // ),
  }),
})
export const { setUser } = userSlice.actions

export const selectUid = (state: RootState) => state.user.data.user?.uid
export const selectDisplayName = (state: RootState) =>
  state.user.data.user?.displayName
export const selectUserRoles = (state: RootState) =>
  state.user.data.claims?.['x-hasura-allowed-roles']

export default userSlice.reducer
