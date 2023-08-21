import type { Meta, StoryObj } from '@storybook/react'
import Checkbox from './Checkbox'

const meta = {
  title: 'CommonUI/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Checkbox>

export default meta
type Story = StoryObj<typeof meta>

export const DefaultCheckbox: Story = {
  args: {
    label: 'Checkbox Label!',
  },
}
