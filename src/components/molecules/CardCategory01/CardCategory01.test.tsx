import { mount } from '@cypress/react'
import CardCategory01 from './CardCategory01'

describe('CardCategory01 Component', () => {
  it('CardCategory01 renders', () => {
    mount(
      <CardCategory01
        text='Sofas & armchair'
        href='/'
        src='https://res.cloudinary.com/thankyou/image/upload/v1648218985/nike/ikea/sofa-01_fgsi8y.jpg'
      />
    )
  })
})
