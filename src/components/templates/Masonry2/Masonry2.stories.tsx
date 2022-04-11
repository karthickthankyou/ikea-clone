import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Masonry2 from './Masonry2'

export default {
  title: 'templates/Masonry2',
  component: Masonry2,
} as ComponentMeta<typeof Masonry2>

const Template: ComponentStory<typeof Masonry2> = (args) => (
  <Masonry2 {...args} />
)

const children = [
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
]

export const TwoColumns = Template.bind({})
TwoColumns.args = {
  gap: '4',
  columns: '2',
  shortOnes: [3],
  childrenLimit: 6,
  children,
}
export const ThreeColumns = Template.bind({})
ThreeColumns.args = {
  gap: '4',
  columns: '3',
  shortOnes: [1, 2, 5, 6, 9],
  childrenLimit: 6,
  children,
}

export const FourColumns = Template.bind({})
FourColumns.args = {
  gap: '4',
  columns: '4',
  shortOnes: [1, 2, 5, 6, 9],
  childrenLimit: 8,
  children,
}
