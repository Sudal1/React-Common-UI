import type { Meta, StoryObj } from '@storybook/react'
import Chip from './Chip'

const meta = {
  title: 'Data Display/Chip',
  component: Chip,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    children: {
      type: 'string',
    },
  },
  args: {
    size: 'sm',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Chip>

export default meta
type Story = StoryObj<typeof meta>

export const UnactiveChip: Story = {
  args: {
    isActive: false,
    children: 'Default Chip!',
  },
}

export const ActiveChip: Story = {
  args: {
    isActive: true,
    children: 'Active Chip!',
  },
}
