import { mount } from '@cypress/react'
import StoryCard from './StoryCard'

describe('StoryCard Component', () => {
  it('StoryCard renders', () => {
    mount(
      <StoryCard
        src='https://res.cloudinary.com/thankyou/image/upload/v1648218044/nike/ikea/decor-01_rvj6tr.jpg'
        title='Hello world'
        description='Lorem ipsum dolor sit amet, consectetur Cum laborum cumque beatae tempore repellendus dicta alias  adipisicing elit. Cum laborum cumque beatae tempore officiis similique, deleniti eaque, ad rem ex.'
      />
    )
  })
})
