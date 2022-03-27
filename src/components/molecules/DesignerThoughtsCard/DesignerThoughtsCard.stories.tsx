import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import DesignerThoughtsCard from './DesignerThoughtsCard'

export default {
  title: 'src/components/molecules/DesignerThoughtsCard',
  component: DesignerThoughtsCard,
} as ComponentMeta<typeof DesignerThoughtsCard>

const Template: ComponentStory<typeof DesignerThoughtsCard> = (args) => (
  <DesignerThoughtsCard {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
  src: 'https://res.cloudinary.com/thankyou/image/upload/v1648218044/nike/ikea/decor-01_rvj6tr.jpg',
  designerName: 'Karthick Ragavendran',
  thoughts:
    'Lorem ipsum is a great quote with valuable life lessions. Lets all lorem ipsum for a second. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto ea sit amet consectetur adipisicing elit. Iusto, explicabo eum ea nam corrupti minus! Iusto, explicabo eum ea nam corrupti minus! Iusto, explicabo eum ea nam corrupti minus!',
}
Primary.parameters = {}

export const ShortDesc = Template.bind({})
ShortDesc.args = {
  src: 'https://res.cloudinary.com/thankyou/image/upload/v1648218044/nike/ikea/decor-01_rvj6tr.jpg',
  designerName: 'Karthick Ragavendran',
  thoughts:
    'Lorem ipsum is a great quote with valuable life lessions. Lets all lorem ipsum for a second.',
}
