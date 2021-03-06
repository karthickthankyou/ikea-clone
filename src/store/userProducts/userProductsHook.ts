/* eslint-disable camelcase */
import { useEffect } from 'react'

import {
  useGetUserProductsQuery,
  useGetOrderedProductsQuery,
  useGetSupportMessagesQuery,
  Order_By,
} from 'src/generated/graphql'
import { useAppDispatch, useAppSelector } from '..'
import { selectUid } from '../user/userSlice'
import { setUserProducts } from './userProductsSlice'

export const useGetWishlisted = () => {
  const uid = useAppSelector(selectUid)
  const dispatch = useAppDispatch()

  const [{ data, fetching, stale, error }] = useGetUserProductsQuery({
    variables: {
      uid: uid!,
    },
    pause: !uid,
  })

  useEffect(() => {
    dispatch(
      setUserProducts({
        data,
        fetching,
        error,
        stale,
      })
    )
  }, [data, dispatch, error, fetching, stale])
}

export const useGetOrderedItems = () => {
  const uid = useAppSelector(selectUid)

  const [{ data, fetching, stale, error }] = useGetOrderedProductsQuery({
    variables: {
      where: {
        uid: { _eq: uid },
      },
    },
    pause: !uid,
  })

  return { data, fetching, stale, error } as const
}
export const useGetSupport = () => {
  const uid = useAppSelector(selectUid)

  const [{ data, fetching, stale, error }] = useGetSupportMessagesQuery({
    variables: {
      where: {
        uid: { _eq: uid },
      },
      order_by: {
        created_at: Order_By.DescNullsLast,
      },
    },
    pause: !uid,
  })

  return { data, fetching, stale, error } as const
}
