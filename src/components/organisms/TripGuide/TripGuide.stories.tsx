import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Provider } from 'react-redux'
import TripGuide from './TripGuide'
import { ReduxAddUid } from 'src/store/Provider'

export default {
  title: 'organisms/TripGuide',
  component: TripGuide,
} as ComponentMeta<typeof TripGuide>

const Template: ComponentStory<typeof TripGuide> = (args) => (
  <TripGuide {...args} />
)

export const UnAuthenticated = Template.bind({})
UnAuthenticated.args = {
  currentPageName: 'Home',
}

export const Authenticated = Template.bind({})
Authenticated.args = {
  currentPageName: '404',
}
Authenticated.decorators = [(story) => <ReduxAddUid>{story()}</ReduxAddUid>]
