import { createClient } from 'urql'

export const urqlAdminClient = createClient({
  url: 'https://api.github.com/graphql',
  fetchOptions: {
    headers: {
      Authorization: `bearer ${process.env.HASURA_ADMIN}`,
      Accept: 'application/vnd.github.packages-preview+json',
    },
  },
})
