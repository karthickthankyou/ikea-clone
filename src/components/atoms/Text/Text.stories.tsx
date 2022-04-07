import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Text from './Text'

export default {
  title: 'atoms/Text',
  component: Text,
} as ComponentMeta<typeof Text>

const Template: ComponentStory<typeof Text> = (args) => (
  <>
    <hr className='border-gray-600' />
    <Text {...args} />
    <hr className='border-gray-600' />
  </>
)

export const Primary = Template.bind({})
Primary.args = {
  size: 'text-lg',
  muted: 'inherit',
  mb: 'mb-0',
  weight: 'font-normal',
  children: 'Hello World you there?',
}

export const Thin = Template.bind({})
Thin.args = {
  size: 'text-lg',
  muted: 'inherit',
  mb: 'mb-0',
  weight: 'font-thin',
  children: 'Hello World you there?',
}

export const Black = Template.bind({})
Black.args = {
  size: 'text-lg',
  muted: 'inherit',
  mb: 'mb-0',
  weight: 'font-black',
  children: 'Bold.',
}
