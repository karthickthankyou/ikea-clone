import { useEffect } from 'react'

import {
  useGetUserProductsQuery,
  useGetOrderedProductsQuery,
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
