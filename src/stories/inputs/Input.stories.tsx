import type { Meta, StoryObj } from '@storybook/react'
import Input from './Input'

const meta = {
  title: 'CommonUI/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const DefaultInput: Story = {
  args: {
    placeholder: 'This is placeholder.',
  },
}

export const ErrorInput: Story = {
  args: {
    errorMessage: 'This is error message for input.',
  },
}

export const DisabledInput: Story = {
  args: {
    disabled: true,
  },
}
