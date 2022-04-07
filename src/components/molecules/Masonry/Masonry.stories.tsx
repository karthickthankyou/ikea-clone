import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Masonry from './Masonry'
import { sampleImagesForMasonry } from './data'

export default {
  title: 'molecules/Masonry',
  component: Masonry,
} as ComponentMeta<typeof Masonry>

const Template: ComponentStory<typeof Masonry> = (args) => <Masonry {...args} />

export const Deprecated = Template.bind({})
Deprecated.args = {
  items: sampleImagesForMasonry,
}
