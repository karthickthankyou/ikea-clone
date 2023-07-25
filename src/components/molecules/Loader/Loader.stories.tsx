import type { Meta, StoryObj } from '@storybook/react'
import { Loader, LoaderPanel } from './Loader'

const meta: Meta<typeof Loader> = {
  component: Loader,
}
export default meta

type Story = StoryObj<typeof Loader>

export const Primary: Story = {
  render: () => {
    return <Loader />
  },
}

export const Panel: Story = {
  render: () => {
    return <LoaderPanel />
  },
}

export const PanelWithText: Story = {
  render: () => {
    return <LoaderPanel text='Loading...' />
  },
}
