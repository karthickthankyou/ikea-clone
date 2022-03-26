import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import AdBanner from './AdBanner'

export default {
  title: 'organisms/AdBanner',
  component: AdBanner,
} as ComponentMeta<typeof AdBanner>

const Template: ComponentStory<typeof AdBanner> = (args) => (
  <AdBanner {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
  src: 'https://res.cloudinary.com/thankyou/image/upload/v1648218985/nike/ikea/sofa-01_fgsi8y.jpg',
  title: 'Download the IKEA app',
  description:
    'Explore a wide range of affordable, well-designed and functional home furnishing solutions for every room in your home - at your fingertips.',
  buttonText: 'Download now',
}
Primary.parameters = {}
