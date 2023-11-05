import type { Meta, StoryObj } from '@storybook/react'
import { ChangeEvent } from 'react'
import { useArgs } from '@storybook/preview-api'
import Switch from './Switch'

const meta = {
  title: 'Inputs/Switch',
  component: Switch,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    variant: {
      options: ['primary', 'secondary', 'tertiary'],
      control: {
        type: 'radio',
      },
    },
    children: {
      control: 'text',
    },
    onChange: {
      control: 'func',
    },
  },
  args: {
    checked: false,
    disabled: false,
    children: null,
  },
  decorators: [
    (Story) => (
      <div style={{ display: 'flex', padding: '2.4rem', gap: '1.2rem' }}>
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],
} satisfies Meta<typeof Switch>

export default meta
type Story = StoryObj<typeof meta>

const Template: Story = {
  render: ({ checked, children, ...args }) => {
    const [_, updateArgs] = useArgs()

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      updateArgs({ checked: event.target.checked })
    }

    return (
      <Switch {...args} checked={checked} onChange={handleChange}>
        {children}
      </Switch>
    )
  },
}

export const DefaultSwitch: Story = {
  ...Template,
}

export const Variant: Story = {
  render: ({ checked, children, ...args }) => {
    const [_, updateArgs] = useArgs()

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      updateArgs({ checked: event.target.checked })
    }

    return (
      <>
        <Switch {...args} checked={checked} onChange={handleChange}>
          Primary Switch
        </Switch>
        <Switch {...args} checked={checked} onChange={handleChange} variant="secondary">
          Secondary Switch
        </Switch>
        <Switch {...args} checked={checked} onChange={handleChange} variant="tertiary">
          Tertiary Switch
        </Switch>
      </>
    )
  },
}

export const LabelSwitch: Story = {
  ...Template,
  args: {
    children: '비밀글',
  },
}
