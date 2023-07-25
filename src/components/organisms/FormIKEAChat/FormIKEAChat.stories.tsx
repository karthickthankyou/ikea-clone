import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import FormIKEAChat from './FormIKEAChat'
import { ReduxAddUid } from 'src/store/Provider'

export default {
  title: 'organisms/FormIKEAChat',
  component: FormIKEAChat,
} as ComponentMeta<typeof FormIKEAChat>

const Template: ComponentStory<typeof FormIKEAChat> = () => <FormIKEAChat />

export const Primary = Template.bind({})
Primary.decorators = [(story) => <ReduxAddUid>{story()} </ReduxAddUid>]
