import type { Meta, StoryObj } from '@storybook/react'
import TextField from './TextField'
import { bool } from 'prop-types'

const meta = {
  title: 'Inputs/TextField',
  component: TextField,
  parameters: {
    layout: 'centered',
  },
  args: {
    placeholder: '',
    errorMessage: '',
    disabled: false,
  },
  tags: ['autodocs'],
} satisfies Meta<typeof TextField>

export default meta
type Story = StoryObj<typeof meta>

export const DefaultTextField: Story = {
  args: {
    placeholder: 'This is placeholder.',
  },
}

export const ErrorTextField: Story = {
  args: {
    errorMessage: 'This is error message for TextField.',
  },
}

export const DisabledTextField: Story = {
  args: {
    disabled: true,
  },
}
