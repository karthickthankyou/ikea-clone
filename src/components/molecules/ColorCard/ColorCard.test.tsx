import { mount } from '@cypress/react'
import ColorCard from './ColorCard'

describe('ColorCard Component', () => {
  it('ColorCard renders', () => {
    mount(
      <ColorCard
        src='https://res.cloudinary.com/thankyou/image/upload/v1648215448/nike/ikea/furniture-02_ekpfno.jpg'
        title='Work from home essentials'
        detailsColor='primaryDark'
      >
        Hello
      </ColorCard>
    )
  })
})
