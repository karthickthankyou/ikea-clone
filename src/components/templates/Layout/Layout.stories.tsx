import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { ReduxAddUid } from 'src/store/Provider'
import Layout from './Layout'

export default {
  title: 'templates/Layout',
  component: Layout,
  decorators: [(story) => <ReduxAddUid>{story()}</ReduxAddUid>],
} as ComponentMeta<typeof Layout>

const Template: ComponentStory<typeof Layout> = (args) => <Layout {...args} />

export const Primary = Template.bind({})
Primary.args = {
  children: (
    <div className='flex items-center justify-center italic text-gray-700 h-screen50 outline-dashed outline-gray-200'>
      Body content
    </div>
  ),
}
Primary.parameters = {}
