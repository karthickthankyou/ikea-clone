import { mount } from '@cypress/react'
import BannerCard01 from './BannerCard01'

describe('BannerCard01 Component', () => {
  it('BannerCard01 renders', () => {
    mount(
      <BannerCard01
        title='AROMATISK'
        description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis maxime, molestiae ut magni aperiam tenetur beatae in repellendus quia possimus sit libero nihil laborum.'
        src='https://res.cloudinary.com/thankyou/image/upload/v1648218044/nike/ikea/decor-01_rvj6tr.jpg'
        href='/'
      />
    )
  })
})
