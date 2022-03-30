import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Image from './Image'

export default {
  title: 'atoms/Image',
  component: Image,
} as ComponentMeta<typeof Image>

const Template: ComponentStory<typeof Image> = (args) => (
  <Image alt='' {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
  src: 'https://via.placeholder.com/200',
  className: 'border border-black',
  height: 100,
  width: 250,
  alt: '',
}
Primary.parameters = {}
