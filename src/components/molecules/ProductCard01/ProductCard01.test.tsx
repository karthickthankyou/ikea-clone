import { mount } from '@cypress/react'
import ProductCard01 from './ProductCard01'

describe('ProductCard01 Component', () => {
  it('ProductCard01 renders', () => {
    mount(
      <ProductCard01
        product={{
          id: 4,
          name: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. At enim perspiciatis pariatur sit amet consectetur adipisicing elit. At enim perspiciatis pariatur!!',
          images: [
            'https://res.cloudinary.com/thankyou/image/upload/v1648218985/nike/ikea/sofa-01_fgsi8y.jpg',
          ],
          category: 'Office',
          subCategory: 'Desk',
          price: 2.29,
        }}
      />
    )
  })
})
