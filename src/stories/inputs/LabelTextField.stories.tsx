import type { Meta, StoryObj } from '@storybook/react'
import LabelTextField from './LabelTextField'

const meta = {
  title: 'Inputs/LabelTextField',
  component: LabelTextField,
  parameters: {
    layout: 'centered',
  },
  args: {
    label: 'Label',
    placeholder: '',
    errorMessage: '',
    disabled: false,
  },
  tags: ['autodocs'],
} satisfies Meta<typeof LabelTextField>

export default meta
type Story = StoryObj<typeof meta>

export const DefaultLabelInput: Story = {
  args: {
    label: 'Label',
    placeholder: 'This is placeholder.',
  },
}

export const ErrorLabelTextField: Story = {
  args: {
    label: 'Label',
    errorMessage: 'This is error message for TextField.',
  },
}

export const DisabledLabelTextField: Story = {
  args: {
    label: 'Label',
    disabled: true,
  },
}
