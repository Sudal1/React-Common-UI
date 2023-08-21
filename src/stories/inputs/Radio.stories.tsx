import type { Meta, StoryObj } from '@storybook/react'
import Radio from './Radio'

const meta = {
  title: 'CommonUI/Radio',
  component: Radio,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Radio>

export default meta
type Story = StoryObj<typeof meta>

export const DefaultRadio: Story = {
  args: {
    label: 'Radio Label!',
  },
}
