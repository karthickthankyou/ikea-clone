/* eslint-disable react/jsx-props-no-spreading */
import { Provider as ReduxProvider } from 'react-redux'
import UrqlProvider, {
  ssrCache,
} from 'src/components/atoms/UrqlProvider/UrqlProvider'
import { store } from 'src/store'

import type { AppProps } from 'next/app'
import '../src/globals.css'
import Notifications from 'src/components/molecules/Notification/Notification'
import { useDebouncedDispatch } from 'src/hooks'
import { useUserListener } from 'src/store/user'
import Layout from 'src/components/templates/Layout/Layout'
import { useGetWishlisted } from 'src/store/userProducts/userProductsHook'
import ChatWindow from 'src/components/organisms/ChatWindow/ChatWindow'

export const AppLevelHooks = () => {
  useUserListener()
  useDebouncedDispatch()
  useGetWishlisted()

  return null
}

const MyApp = ({ Component, pageProps }: AppProps) => {
  if (pageProps.urqlState) {
    ssrCache.restoreData(pageProps.urqlState)
  }

  return (
    <ReduxProvider store={store}>
      <UrqlProvider>
        <ChatWindow />
        <Layout>
          <Notifications />
          <AppLevelHooks />
          <Component {...pageProps} />
        </Layout>
      </UrqlProvider>
    </ReduxProvider>
  )
}

export default MyApp
