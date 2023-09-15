import type { Meta, StoryObj } from '@storybook/react'
import Button from './Button'

const meta = {
  title: 'Inputs/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    children: {
      control: 'text',
    },
  },
  args: {
    variant: 'contained',
    size: 'md',
    children: 'Hello World',
    wide: false,
    disabled: false,
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Variants = () => {
  return (
    <>
      <Button variant="contained">contained</Button>
      <Button variant="outlined">outlined</Button>
      <Button variant="ghost">ghost</Button>
      <Button variant="destructive">destructive</Button>
      <Button variant="text">text</Button>
    </>
  )
}

export const Test: Story = {
  render: (args) => {
    return (
      <>
        <Button variant="contained">contained</Button>
        <Button variant="outlined">outlined</Button>
        <Button variant="ghost">ghost</Button>
        <Button variant="destructive">destructive</Button>
        <Button variant="text">text</Button>
      </>
    )
  },
  decorators: [
    () => {
      return <Button variant="text">text</Button>
    },
  ],
}

export const ContainedButton: Story = {
  args: {
    variant: 'contained',
  },
}

export const OutlineButton: Story = {
  args: {
    variant: 'outlined',
  },
}

export const GhostButton: Story = {
  args: {
    variant: 'ghost',
  },
}

export const DestruciveButton: Story = {
  args: {
    variant: 'destructive',
  },
}

export const TextButton: Story = {
  args: {
    variant: 'text',
  },
}
