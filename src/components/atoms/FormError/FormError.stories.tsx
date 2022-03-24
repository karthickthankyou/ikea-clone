import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import FormError from './FormError'

export default {
  title: 'src/components/atoms/FormError',
  component: FormError,
} as ComponentMeta<typeof FormError>

const Template: ComponentStory<typeof FormError> = (args) => (
  <FormError {...args} />
)

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
