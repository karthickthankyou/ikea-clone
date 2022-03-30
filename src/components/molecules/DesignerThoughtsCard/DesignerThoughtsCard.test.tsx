import { mount } from '@cypress/react'
import DesignerThoughtsCard from './DesignerThoughtsCard'

describe('DesignerThoughtsCard Component', () => {
  it('DesignerThoughtsCard renders', () => {
    mount(
      <DesignerThoughtsCard
        src='https://res.cloudinary.com/thankyou/image/upload/v1648218044/nike/ikea/decor-01_rvj6tr.jpg'
        designerName='Karthick Ragavendran'
        thoughts='Lorem ipsum is a great quote with valuable life lessions. Lets all lorem ipsum for a second. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto ea sit amet consectetur adipisicing elit. Iusto, explicabo eum ea nam corrupti minus! Iusto, explicabo eum ea nam corrupti minus! Iusto, explicabo eum ea nam corrupti minus!'
      />
    )
  })
})
