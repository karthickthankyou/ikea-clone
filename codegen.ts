import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  overwrite: true,
  schema: 'http://127.0.0.1:3000/graphql',
  watch: true,
  generates: {
    './src/generated/index.tsx': {
      documents: './src/**/*.graphql',
      plugins: [
        'typescript',
        'typescript-operations',
        'named-operations-object',
        'typescript-react-apollo',
      ],
      config: {
        avoidOptionals: false,
        exposeQueryKeys: true,
        fetcher: {
          endpoint: 'http://127.0.0.1:3000/graphql',
        },
        pureMagicComment: true,
      },
    },
  },
}

export default config
