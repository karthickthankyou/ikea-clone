import type { NextPage } from 'next'
import Head from 'next/head'
import { useGetProductsQuery } from 'src/generated/graphql'

const Home: NextPage = () => {
  const [data] = useGetProductsQuery()
  console.log('Data: ', data)
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>Main</main>
      <footer>Footer</footer>
    </div>
  )
}

export default Home
