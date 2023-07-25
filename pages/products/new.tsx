import { NextPage } from 'next'
import { NextSeo } from 'next-seo'
import PostProductTemplate from 'src/components/templates/PostProduct'

import { useRedirectUnAuthenticatedUsers } from 'src/hooks'

// useRedirectUnAuthenticatedUsers()
const PostProductPage: NextPage = () => (
  <div className='bg-gray-50'>
    <NextSeo
      title='New product - Ikea clone | Karthick Ragavendran'
      description='Post new product.'
    />
    <PostProductTemplate />
  </div>
)

export default PostProductPage
