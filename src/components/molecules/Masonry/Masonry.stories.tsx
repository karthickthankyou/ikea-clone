import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Masonry from './Masonry'
import { sampleImagesForMasonry } from './data'

export default {
  title: 'molecules/Masonry',
  component: Masonry,
} as ComponentMeta<typeof Masonry>

const Template: ComponentStory<typeof Masonry> = (args) => <Masonry {...args} />

export const Primary = Template.bind({})
Primary.args = {
  items: sampleImagesForMasonry,
}
Primary.parameters = {}
