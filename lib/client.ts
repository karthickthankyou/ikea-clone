import { createClient } from 'urql'
import dateFormat from 'dateformat'

export const urqlAdminClient = createClient({
  url: `${process.env.NEXT_PUBLIC_API_URL}graphql`,
  exchanges: [],
})

export const formatDate = (date: string) => dateFormat(date, 'mmm d yyyy HH:MM')
