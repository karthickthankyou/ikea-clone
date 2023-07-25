import type { Meta, StoryObj } from '@storybook/react'
import { PlainButton } from './PlainButton'

const meta: Meta<typeof PlainButton> = {
  component: PlainButton,
}
export default meta

type Story = StoryObj<typeof PlainButton>

export const Primary: Story = {
  args: {
    children: 'Plain button',
  },
}

export const Loading: Story = {
  args: {
    children: 'Plain button',
    loading: true,
  },
}
