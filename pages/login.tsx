import { NextPage } from 'next'
import { NextSeo } from 'next-seo'
import Login from 'src/components/templates/Login'

import { useRedirectLoggedInUsers } from 'src/hooks'

const LoginPage: NextPage = () => {
  useRedirectLoggedInUsers()

  return (
    <div>
      <NextSeo
        title='Login page - Ikea clone | Karthick Ragavendran'
        description='Create account with your email or google account.'
      />
      <Login />
    </div>
  )
}

export default LoginPage
