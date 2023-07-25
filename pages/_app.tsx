import type { AppProps } from 'next/app'
import '../src/globals.css'
import Notifications from 'src/components/molecules/Notification/Notification'

import Layout from 'src/components/templates/Layout/Layout'
import ChatWindow from 'src/components/organisms/ChatWindow/ChatWindow'
import { useUserListener } from 'src/hooks/user'
import { ApolloProvider } from 'src/config/apollo'
import { ReduxProvider } from 'src/store/Provider'

export const AppLevelHooks = () => {
  useUserListener()
  return null
}

const MyApp = ({ Component, pageProps }: AppProps) => (
  <ReduxProvider>
    <ApolloProvider>
      <ChatWindow />
      <Layout>
        <Notifications />
        <AppLevelHooks />
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  </ReduxProvider>
)

export default MyApp
