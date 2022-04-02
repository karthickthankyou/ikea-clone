import { useEffect, useState } from 'react'
import {
  catchError,
  debounceTime,
  distinct,
  distinctUntilChanged,
  EMPTY,
  map,
  Subject,
  tap,
} from 'rxjs'
import { useAppDispatch } from 'src/store'
import { setFilterQueryArgs, setProducFilter } from 'src/store/search'
import {
  DirtyFilterType,
  SearchFilterKeys,
  SearchFilterType,
  sortOptions,
} from './data'

export const useDispatchHomeFilter = ({
  filterData,
  dirtyFields,
}: {
  filterData: SearchFilterType
  dirtyFields: DirtyFilterType
}) => {
  const dispatch = useAppDispatch()

  const [input$] = useState(
    () =>
      new Subject<{
        data: typeof filterData
        dirtyData: typeof dirtyFields
      }>()
  )

  useEffect(() => {
    const subscription = input$
      .pipe(
        debounceTime(600),
        // Deep compare the inputs.
        distinctUntilChanged(
          (prev, curr) => JSON.stringify(prev) === JSON.stringify(curr)
        ),
        tap((v) => console.log(v, 'Come on.')),
        map(({ data, dirtyData }): Partial<SearchFilterType> => {
          const keys = Object.keys(dirtyData)
          return Object.fromEntries(
            Object.entries(data).filter(([key]) => keys.includes(key))
          )
        }),
        tap((v) => dispatch(setProducFilter(v))),
        map((v) => {
          const { search, price, rating, categories, sort } = v
          const productsWhere: Partial<{ [key in SearchFilterKeys]: any }> = {}
          const productRating = ((rating || '').match(/★/g) || []).length

          if (price) productsWhere.price = { _gte: price[0], _lte: price[1] }
          if (productRating) productsWhere.rating = { _gte: productRating }
          if (categories) {
            productsWhere.categories = { _in: categories }
          }

          const orderBy = sort ? sortOptions[sort] : {}
          return {
            args: { search },
            where: productsWhere,
            order_by: orderBy,
          }
        }),
        tap((v) => dispatch(setFilterQueryArgs(v))),
        catchError(() => EMPTY)
      )
      .subscribe()
    return () => subscription.unsubscribe()
  }, [dispatch, input$])

  useEffect(() => {
    input$.next({ data: filterData, dirtyData: dirtyFields })
  }, [dirtyFields, filterData, input$])
}
