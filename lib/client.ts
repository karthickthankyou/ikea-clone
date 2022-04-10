import { createClient } from 'urql'

export const urqlAdminClient = createClient({
  url: 'https://ikea-karthick.herokuapp.com/v1/graphql',
  fetchOptions: {
    headers: {
      Authorization: `bearer ${process.env.HASURA_ADMIN}`,
    },
  },
})
