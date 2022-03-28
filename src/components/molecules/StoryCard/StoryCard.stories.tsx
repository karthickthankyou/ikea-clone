import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import StoryCard from './StoryCard'

export default {
  title: 'molecules/StoryCard',
  component: StoryCard,
} as ComponentMeta<typeof StoryCard>

const Template: ComponentStory<typeof StoryCard> = (args) => (
  <StoryCard {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
  src: 'https://res.cloudinary.com/thankyou/image/upload/v1648218044/nike/ikea/decor-01_rvj6tr.jpg',
  title: 'Hello world',
  description:
    'Lorem ipsum dolor sit amet, consectetur Cum laborum cumque beatae tempore repellendus dicta alias  adipisicing elit. Cum laborum cumque beatae tempore officiis similique, deleniti eaque, ad rem ex.',
}
Primary.parameters = {}
export const LongContent = Template.bind({})
LongContent.args = {
  src: 'https://res.cloudinary.com/thankyou/image/upload/v1648218044/nike/ikea/decor-01_rvj6tr.jpg',
  title: 'Hello world',
  description: (
    <>
      <div>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid,
        dicta. Fugiat esse quis aut et id laudantium itaque minima eaque
        accusantium iure ad natus quod nam explicabo suscipit, soluta corporis!
        Aspernatur, at. Quo, quod culpa! Voluptate officiis quisquam omnis quos
        beatae ipsa nulla laborum atque dignissimos quidem corrupti aut in vel
        architecto amet ad deserunt modi consequuntur similique delectus,
        commodi harum! Tempore commodi saepe vitae impedit repellendus qui quasi
        sapiente a corporis debitis illo suscipit, quisquam quibusdam, vel
        fugiat excepturi sint enim? Odio ipsam numquam nobis placeat temporibus
        sapiente nesciunt a mollitia qui! Laboriosam, temporibus? Perspiciatis
        unde sequi autem molestiae.
      </div>
      <div>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid,
        dicta. Fugiat esse quis aut et id laudantium itaque minima eaque
        accusantium iure ad natus quod nam explicabo suscipit, soluta corporis!
        Aspernatur, at. Quo, quod culpa! Voluptate officiis quisquam omnis quos
        beatae ipsa nulla laborum atque dignissimos quidem corrupti aut in vel
        architecto amet ad deserunt modi consequuntur similique delectus,
        commodi harum! Tempore commodi saepe vitae impedit repellendus qui quasi
        sapiente a corporis debitis illo suscipit, quisquam quibusdam, vel
        fugiat excepturi sint enim? Odio ipsam numquam nobis placeat temporibus
        sapiente nesciunt a mollitia qui! Laboriosam, temporibus? Perspiciatis
        unde sequi autem molestiae.
      </div>
      <div>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid,
        dicta. Fugiat esse quis aut et id laudantium itaque minima eaque
        accusantium iure ad natus quod nam explicabo suscipit, soluta corporis!
        Aspernatur, at. Quo, quod culpa! Voluptate officiis quisquam omnis quos
        beatae ipsa nulla laborum atque dignissimos quidem corrupti aut in vel
        architecto amet ad deserunt modi consequuntur similique delectus,
        commodi harum! Tempore commodi saepe vitae impedit repellendus qui quasi
        sapiente a corporis debitis illo suscipit, quisquam quibusdam, vel
        fugiat excepturi sint enim? Odio ipsam numquam nobis placeat temporibus
        sapiente nesciunt a mollitia qui! Laboriosam, temporibus? Perspiciatis
        unde sequi autem molestiae.
      </div>
    </>
  ),
}
LongContent.parameters = {}
