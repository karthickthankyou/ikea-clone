import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Tooltip from './Tooltip'

export default {
  title: 'src/components/atoms/Tooltip',
  component: Tooltip,
} as ComponentMeta<typeof Tooltip>

const Template: ComponentStory<typeof Tooltip> = (args) => <Tooltip {...args} />

export const Primary = Template.bind({})
Primary.args = {
  title: 'Hello World',
  arrow: true,
  children: <div className='inline'>Hello children</div>,
}
Primary.parameters = {}
