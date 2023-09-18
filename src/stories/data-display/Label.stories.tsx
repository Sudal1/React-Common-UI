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
    variant: {
      options: ['primary', 'secondary', 'tertiary', 'positive', 'negative'],
      control: {
        type: 'radio',
      },
    },
    size: {
      options: ['sm', 'md'],
      control: {
        type: 'radio',
      },
    },
  },
  args: {
    children: 'NEW',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Label>

export default meta
type Story = StoryObj<typeof meta>

export const DefaultLabel: Story = {
  render: (args) => {
    return <Label {...args} />
  },
}

export const Variant: Story = {
  render: (args) => {
    return (
      <>
        <Label>Primary</Label>
        <Label variant="secondary">Secondary</Label>
        <Label variant="tertiary">Tertiary</Label>
        <Label variant="positive">Positive</Label>
        <Label variant="negative">Negative</Label>
      </>
    )
  },

  decorators: [
    (Story) => (
      <div style={{ display: 'flex' }}>
        <Story />
      </div>
    ),
  ],
}
