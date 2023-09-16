import type { Meta, StoryObj } from '@storybook/react'
import { useArgs } from '@storybook/addons'
import Checkbox from './Checkbox'
import CheckboxGroup from './CheckboxGroup'

const meta = {
  title: 'Inputs/CheckboxGroup',
  component: CheckboxGroup,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    children: {
      control: 'text',
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof CheckboxGroup>

export default meta
type Story = StoryObj<typeof meta>

const Template: Story = {
  render: ({ selectedValues, children }) => {
    const [_, setValues] = useArgs<(string | number)[]>()

    return (
      <CheckboxGroup selectedValues={selectedValues} onChange={setValues}>
        {children}
      </CheckboxGroup>
    )
  },
  args: {
    selectedValues: [],
    children: <Checkbox value="1">Checkbox 1</Checkbox>,
  },
}

export const DefaultCheckbox: Story = {
  ...Template,
}
