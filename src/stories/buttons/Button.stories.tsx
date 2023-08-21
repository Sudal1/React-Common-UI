import type { Meta, StoryObj } from '@storybook/react'
import Button from './Button'

const meta = {
  title: 'CommonUI/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    children: {
      type: 'string',
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const DefaultPrimary: Story = {
  args: {
    variant: 'primary',
    children: 'primary!',
  },
}

export const DefaultSecondary: Story = {
  args: {
    variant: 'secondary',
    children: 'secondary!',
  },
}

export const DefaultGhost: Story = {
  args: {
    variant: 'ghost',
    children: 'ghost...',
  },
}

export const DefaultDestrucive: Story = {
  args: {
    variant: 'destructive',
    children: 'destructive',
  },
}
