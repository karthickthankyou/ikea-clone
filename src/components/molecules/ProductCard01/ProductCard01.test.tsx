import { mount } from '@cypress/react'
import ProductCard01 from './ProductCard01'

describe('ProductCard01 Component', () => {
  it('ProductCard01 renders', () => {
    mount(
      <ProductCard01
        title='BOKKREMLA'
        description='Lorem ipsum dolor sit amet consectetur adipisicing elit. At enim perspiciatis pariatur!'
        src='https://res.cloudinary.com/thankyou/image/upload/v1648218985/nike/ikea/sofa-01_fgsi8y.jpg'
        rating={4.2}
        price={100000000.99}
        oldPrice={199999999.99}
        reviews={12}
      />
    )
  })
})
