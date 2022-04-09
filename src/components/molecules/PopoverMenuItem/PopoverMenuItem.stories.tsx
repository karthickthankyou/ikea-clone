import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Popover from './PopoverMenuItem'

export default {
  title: 'molecules/PopoverMenuItem',
  component: Popover,
} as ComponentMeta<typeof Popover>

const Template: ComponentStory<typeof Popover> = () => (
  <div className='relative'>
    <Popover>
      <Popover.Button>Click me</Popover.Button>
      <Popover.Panel>
        <div className='max-w-sm'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla
          placeat nostrum natus!
        </div>
      </Popover.Panel>
    </Popover>
  </div>
)
const WithOverlayTemplate: ComponentStory<typeof Popover> = () => (
  <div className='relative'>
    <Popover>
      <Popover.Overlay />
      <Popover.Button>Click me</Popover.Button>
      <Popover.Panel>
        <div className='max-w-sm'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla
          placeat nostrum natus!
        </div>
      </Popover.Panel>
    </Popover>
  </div>
)

export const Primary = Template.bind({})
export const WithOverlay = WithOverlayTemplate.bind({})
