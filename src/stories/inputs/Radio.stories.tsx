import type { Meta, StoryObj } from '@storybook/react'
import { ChangeEvent } from 'react'
import { useArgs } from '@storybook/addons'
import Radio from './Radio'

const meta = {
  title: 'CommonUI/Radio',
  component: Radio,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Radio>

export default meta
type Story = StoryObj<typeof meta>

const Template: Story = {
  render: ({ checked, children, ...args }) => {
    const [_, updateArgs] = useArgs()

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      updateArgs({ checked: event.target.checked })
    }

    return (
      <Radio {...args} checked={checked} onChange={handleChange}>
        {children}
      </Radio>
    )
  },
  args: {
    value: 'Radio!',
    children: 'Radio!',
  },
}

export const DefaultRadio: Story = {
  ...Template,
}
