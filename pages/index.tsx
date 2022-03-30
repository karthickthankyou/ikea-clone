import { NextPage } from 'next'
import { NextSeo } from 'next-seo'
import Home from 'src/components/templates/Home'

const HomePage: NextPage = () => (
  <div>
    <NextSeo
      title='Login page - Ikea clone | Karthick Ragavendran'
      description='Create account with your email or google account.'
    />
    <Home />
  </div>
)

export default HomePage
