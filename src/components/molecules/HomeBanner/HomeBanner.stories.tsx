import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import HomeBanner from './HomeBanner'

export default {
  title: 'src/components/molecules/HomeBanner',
  component: HomeBanner,
} as ComponentMeta<typeof HomeBanner>

const Template: ComponentStory<typeof HomeBanner> = () => <HomeBanner />

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
