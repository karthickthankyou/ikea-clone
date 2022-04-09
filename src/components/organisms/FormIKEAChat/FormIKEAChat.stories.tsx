import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import FormIKEAChat from './FormIKEAChat'

export default {
  title: 'organisms/FormIKEAChat',
  component: FormIKEAChat,
  decorators: [(story) => <div className='max-w-sm'>{story()}</div>],
} as ComponentMeta<typeof FormIKEAChat>

const Template: ComponentStory<typeof FormIKEAChat> = () => <FormIKEAChat />

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
