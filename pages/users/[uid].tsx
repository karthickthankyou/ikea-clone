import { GetStaticProps, NextPage } from 'next'
import { NextSeo } from 'next-seo'
import { useRouter } from 'next/router'
import { getFunctions, httpsCallable } from 'firebase/functions'
import { ParsedUrlQuery } from 'querystring'
import Login from 'src/components/templates/Login'

import { getQueryParam } from 'src/util/functions'
import { useRedirectLoggedInUsers } from 'src/hooks'
import Button from 'src/components/atoms/Button/Button'
import { useState } from 'react'
import { useAppSelector } from 'src/store'

const UserPage: NextPage = () => {
  const uid = getQueryParam(useRouter().query.uid)

  const [becoming, setBecoming] = useState(false)
  const becomeSellerForIkeaClick = () => {
    setBecoming(true)
    const functions = getFunctions()
    const becomeSellerForIkea = httpsCallable(functions, 'becomeSellerForIkea')
    becomeSellerForIkea().then((result) => {
      // Read result of the Cloud Function.
      /** @type {any} */
      const { data } = result
      // eslint-disable-next-line no-console
      console.log('Data: ', data, result)
      setBecoming(false)
    })
  }

  const claims = useAppSelector((state) => state.user.data.claims)
  const roles = claims?.['x-hasura-allowed-roles']
  return (
    <div>
      <NextSeo
        title='User page - Ikea clone | Karthick Ragavendran'
        description='Create account with your email or google account.'
      />
      <div>{uid}</div>
      <div>
        <div>Roles</div>
        {roles?.length === 0 ? (
          <div>No roles assigned</div>
        ) : (
          <div>
            {roles?.map((item) => (
              <div key={item}>{item}</div>
            ))}
          </div>
        )}
      </div>
      <Button
        isLoading={becoming}
        type='button'
        onClick={becomeSellerForIkeaClick}
      >
        Become Agent
      </Button>
    </div>
  )
}

export default UserPage
