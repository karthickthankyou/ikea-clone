/* eslint-disable react/jsx-props-no-spreading */
import { Provider as ReduxProvider } from 'react-redux'
import UrqlProvider, {
  ssrCache,
} from 'src/components/atoms/UrqlProvider/UrqlProvider'
import { store } from 'src/store'

import type { AppProps } from 'next/app'
import '../src/globals.css'

const MyApp = ({ Component, pageProps }: AppProps) => {
  if (pageProps.urqlState) {
    ssrCache.restoreData(pageProps.urqlState)
  }

  return (
    <ReduxProvider store={store}>
      <UrqlProvider>
        <Component {...pageProps} />
      </UrqlProvider>
    </ReduxProvider>
  )
}

export default MyApp
