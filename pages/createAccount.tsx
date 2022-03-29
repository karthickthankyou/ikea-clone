import { NextPage } from 'next'
import { NextSeo } from 'next-seo'
import CreateAccount from 'src/components/templates/CreateAccount'

import { useRedirectLoggedInUsers } from 'src/hooks'

const CreateAccountPage: NextPage = () => {
  useRedirectLoggedInUsers()

  return (
    <div>
      <NextSeo
        title='Create account page - Ikea clone | Karthick Ragavendran'
        description='Create account with your email or google account.'
      />
      <CreateAccount />
    </div>
  )
}

export default CreateAccountPage
