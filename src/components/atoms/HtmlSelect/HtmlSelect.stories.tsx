import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import HtmlSelect from './HtmlSelect'
import HtmlLabel from '../HtmlLabel'

export default {
  title: 'atoms/HtmlSelect',
  component: HtmlSelect,
} as ComponentMeta<typeof HtmlSelect>

const Template: ComponentStory<typeof HtmlSelect> = (args) => (
  <HtmlLabel className='flex flex-col items-start' htmlFor='select'>
    <div className='mb-2'>Sample select</div>
    <HtmlSelect {...args} id='select' />
  </HtmlLabel>
)

export const Primary = Template.bind({})
Primary.args = {
  name: 'Cars',
  children: (
    <>
      <option value='volvo'>Volvo</option>
      <option value='saab'>Saab</option>
      <option value='mercedes'>Mercedes</option>
      <option value='audi'>Audi</option>
    </>
  ),
}
Primary.parameters = {}
