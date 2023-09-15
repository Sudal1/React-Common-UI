import type { Meta, StoryObj } from '@storybook/react'
import { ChangeEvent } from 'react'
import { useArgs } from '@storybook/addons'
import Toggle from './Toggle'

const meta = {
  title: 'Inputs/Toggle',
  component: Toggle,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    children: {
      control: 'text',
    },
    onChange: {
      control: 'func',
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Toggle>

export default meta
type Story = StoryObj<typeof meta>

const Template: Story = {
  render: ({ checked, children, ...args }) => {
    const [_, updateArgs] = useArgs()

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      updateArgs({ checked: event.target.checked })
    }

    return (
      <Toggle {...args} checked={checked} onChange={handleChange}>
        {children}
      </Toggle>
    )
  },
  args: {
    checked: false,
    disabled: false,
  },
}

export const DefaultToggle: Story = {
  ...Template,
  args: {
    checked: false,
    disabled: false,
    children: null,
  },
}

export const LabelToggle: Story = {
  ...Template,
  args: {
    checked: false,
    disabled: false,
    children: '비밀글',
  },
}
