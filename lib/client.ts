import { createClient } from 'urql'

const HASURA_ADMIN = process.env.HASURA_ADMIN || ''

export const urqlAdminClient = createClient({
  url: 'https://ikea-karthick.herokuapp.com/v1/graphql',
  fetchOptions: {
    headers: {
      'x-hasura-admin-secret': HASURA_ADMIN,
    },
  },
})
