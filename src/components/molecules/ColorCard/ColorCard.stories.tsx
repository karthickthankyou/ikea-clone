import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import ColorCard from './ColorCard'

export default {
  title: 'molecules/ColorCard',
  component: ColorCard,
} as ComponentMeta<typeof ColorCard>

const Template: ComponentStory<typeof ColorCard> = (args) => (
  <div className='max-w-sm'>
    <ColorCard {...args} />
  </div>
)

export const Primary = Template.bind({})
Primary.args = {
  src: 'https://res.cloudinary.com/thankyou/image/upload/v1648215448/nike/ikea/furniture-02_ekpfno.jpg',
  title: 'Work from home essentials',
  detailsColor: 'primaryDark',
}
Primary.parameters = {}
