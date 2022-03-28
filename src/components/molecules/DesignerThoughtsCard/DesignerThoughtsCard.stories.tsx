import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import DesignerThoughtsCard from './DesignerThoughtsCard'

export default {
  title: 'molecules/DesignerThoughtsCard',
  component: DesignerThoughtsCard,
} as ComponentMeta<typeof DesignerThoughtsCard>

const Template: ComponentStory<typeof DesignerThoughtsCard> = (args) => (
  <DesignerThoughtsCard {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
  src: 'https://res.cloudinary.com/thankyou/image/upload/v1648458983/nike/people/IMG_20220313_150642_bbbv9x.jpg',
  designerName: 'Karthick Ragavendran',
  thoughts: (
    <div className='space-y-3'>
      <p>
        Lorem ipsum is hakuna matata for programmers. Timon and pumbaa are our
        own two hands.
      </p>
      <p>
        Let&apos;s all lorem ipsum for a moment. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Ea pariatur quisquam nisi.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
        nesciunt ducimus a quis maxime laudantium qui debitis sed iste,
        laboriosam, ullam omnis voluptatibus soluta.
      </p>
    </div>
  ),
}
Primary.parameters = {}

export const ShortDesc = Template.bind({})
ShortDesc.args = {
  src: 'https://res.cloudinary.com/thankyou/image/upload/v1648458983/nike/people/IMG_20220313_150642_bbbv9x.jpg',
  designerName: 'Karthick Ragavendran',
  thoughts:
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda nesciunt ducimus a quis maxime laboriosam, ullam omnis voluptatibus soluta.',
}
