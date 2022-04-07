import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Brand from './Brand'

export default {
  title: 'atoms/Brand',
  component: Brand,
} as ComponentMeta<typeof Brand>

const Template: ComponentStory<typeof Brand> = () => (
  <div className='relative h-12 w-36'>
    <Brand />
  </div>
)

export const Primary = Template.bind({})
