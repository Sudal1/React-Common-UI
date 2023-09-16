import type { Meta, StoryObj } from '@storybook/react'
import { useArgs } from '@storybook/client-api'
import Checkbox from './Checkbox'
import CheckboxGroup from './CheckboxGroup'
import { useState } from 'react'

const meta = {
  title: 'Inputs/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Checkbox>

export default meta
type Story = StoryObj<typeof meta>

const Template: Story = {
  render: ({ checked, children, ...args }) => {
    const [_, updateArgs] = useArgs()

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      updateArgs({ checked: event.target.checked })
    }

    return (
      <Checkbox {...args} checked={checked} onChange={handleChange}>
        {children}
      </Checkbox>
    )
  },
  args: {
    value: 'Default Checkbox',
    checked: false,
    children: 'Default Checkbox',
  },
}

export const DefaultCheckbox: Story = {
  ...Template,
}

export const DisabledCheckbox: Story = {
  render: Template.render,
  args: {
    ...Template.args,
    disabled: true,
  },
}

export const Test: Story = {
  render: ({ value, children }) => {
    const [values, setValues] = useState<(string | number)[]>([])

    return (
      <CheckboxGroup selectedValues={values} onChange={setValues}>
        <Checkbox value="1">Checkbox 1</Checkbox>
        <Checkbox value="2">Checkbox 2</Checkbox>
        <Checkbox value={value}>{children}</Checkbox>
        <p>{'selected values: ' + values.join('')}</p>
      </CheckboxGroup>
    )
  },
  args: {
    value: '3',
    children: 'checkbox 3',
  },
}
