import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Masonry2 from './Masonry2'

export default {
  title: 'src/components/templates/Masonry2',
  component: Masonry2,
} as ComponentMeta<typeof Masonry2>

const Template: ComponentStory<typeof Masonry2> = (args) => (
  <Masonry2 {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
  gap: '6',
  columns: '5',
  shortOnes: [1, 2, 5, 6, 9],
  childrenLimit: 7,
  children: [
    <div className='h-full p-3 rounded-lg shadow-lg bg-red/30' key='1'>
      Hello
    </div>,
    <div className='h-full p-3 rounded-lg shadow-lg bg-green/30' key='2'>
      Hello 2
    </div>,
    <div className='h-full p-3 rounded-lg shadow-lg bg-red/30' key='3'>
      Hello 3
    </div>,
    <div className='h-full p-3 rounded-lg shadow-lg bg-red/30' key='4'>
      Hello
    </div>,
    <div className='h-full p-3 rounded-lg shadow-lg bg-green/30' key='5'>
      Hello 2
    </div>,
    <div className='h-full p-3 rounded-lg shadow-lg bg-red/30' key='6'>
      Hello 3
    </div>,
    <div className='h-full p-3 rounded-lg shadow-lg bg-red/30' key='7'>
      Hello
    </div>,
    <div className='h-full p-3 rounded-lg shadow-lg bg-green/30' key='8'>
      Hello 2
    </div>,
    <div className='h-full p-3 rounded-lg shadow-lg bg-red/30' key='9'>
      Hello 3
    </div>,
    <div className='h-full p-3 rounded-lg shadow-lg bg-green/30' key='10'>
      Hello 2
    </div>,
  ],
}
Primary.parameters = {}
