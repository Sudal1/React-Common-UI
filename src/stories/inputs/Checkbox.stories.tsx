import type { Meta, StoryObj } from '@storybook/react'
import { ChangeEvent } from 'react'
import { useArgs } from '@storybook/addons'
import Checkbox from './Checkbox'

const meta = {
  title: 'CommonUI/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    onChange: {
      control: 'func',
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Checkbox>

export default meta
type Story = StoryObj<typeof meta>

const Template: Story = {
  render: ({ checked, children, ...args }) => {
    const [_, updateArgs] = useArgs()

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      updateArgs({ checked: event.target.checked })
    }

    return (
      <Checkbox {...args} checked={checked} onChange={handleChange}>
        {children}
      </Checkbox>
    )
  },
  args: {
    checked: false,
    children: 'Default Checkbox',
  },
}

export const DefaultCheckbox: Story = {
  ...Template,
  args: {
    checked: false,
    disabled: false,
    children: 'Default Checkbox',
  },
}
