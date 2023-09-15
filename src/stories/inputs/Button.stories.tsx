import type { Meta, StoryObj } from '@storybook/react'
import Button from './Button'

const meta = {
  title: 'Inputs/Button',
  component: Button,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    children: {
      control: 'text',
    },
    disabled: {
      control: 'boolean',
    },
  },
  args: {
    children: 'Hello World',
    wide: false,
    disabled: false,
  },
  decorators: [
    (Story) => (
      <div style={{ display: 'flex', padding: '2.4rem' }}>
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const DefaultButton: Story = {
  render: (args) => {
    return <Button {...args} />
  },
}

export const Variant: Story = {
  render: (args) => {
    return (
      <>
        <Button>contained</Button>
        <Button variant="outlined">outlined</Button>
        <Button variant="ghost">ghost</Button>
        <Button variant="text">text</Button>
        <Button variant="destructive">destructive</Button>
      </>
    )
  },
}

export const Size: Story = {
  render: (args) => {
    return (
      <>
        <Button {...args} size="sm" />
        <Button {...args} size="md" />
        <Button {...args} size="lg" />
      </>
    )
  },
}

export const WideButton: Story = {
  render: (args) => {
    return <Button {...args} wide />
  },
}

export const DisabledButton: Story = {
  render: (args) => {
    return <Button {...args} disabled />
  },
}
