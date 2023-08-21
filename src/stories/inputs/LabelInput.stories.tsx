import type { Meta, StoryObj } from '@storybook/react'
import LabelInput from './LabelInput'

const meta = {
  title: 'CommonUI/LabelInput',
  component: LabelInput,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof LabelInput>

export default meta
type Story = StoryObj<typeof meta>

export const DefaultLabelInput: Story = {
  args: {
    label: 'Label',
  },
}

export const ErrorLabelInput: Story = {
  args: {
    label: 'Label',
    errorMessage: 'This is error message for input.',
  },
}
