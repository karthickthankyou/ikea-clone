import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import CardCategory01 from './CardCategory01'

export default {
  title: 'molecules/CardCategory01',
  component: CardCategory01,
} as ComponentMeta<typeof CardCategory01>

const Template: ComponentStory<typeof CardCategory01> = (args) => (
  <div className='relative max-w-xs'>
    <CardCategory01 {...args} />
  </div>
)

export const Primary = Template.bind({})
Primary.args = {
  text: 'Sofas & armchair',
  href: '/',
  className: 'h-96',
  src: 'https://res.cloudinary.com/thankyou/image/upload/v1648218985/nike/ikea/sofa-01_fgsi8y.jpg',
}
Primary.parameters = {}
