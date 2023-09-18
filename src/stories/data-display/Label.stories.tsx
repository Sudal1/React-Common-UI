import type { Meta, StoryObj } from '@storybook/react'
import Label from './Label'

const meta = {
  title: 'Data Display/Label',
  component: Label,
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
} satisfies Meta<typeof Label>

export default meta
type Story = StoryObj<typeof meta>

export const DefaultLabel: Story = {
  args: {
    isActive: false,
    children: 'Default Label!',
  },
}
