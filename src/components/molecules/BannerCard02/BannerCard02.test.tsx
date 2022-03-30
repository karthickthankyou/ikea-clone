import { mount } from '@cypress/react'
import BannerCard02 from './BannerCard02'

describe('BannerCard02 Component', () => {
  it('BannerCard02 renders', () => {
    mount(
      <BannerCard02
        src='https://res.cloudinary.com/thankyou/image/upload/v1648216310/nike/ikea/light-02_zjbzuh.jpg'
        text='See all storage solution systems.'
        href='/'
      />
    )
  })
})
