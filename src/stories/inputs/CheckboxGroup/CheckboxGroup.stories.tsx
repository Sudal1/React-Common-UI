import type { Meta, StoryObj } from '@storybook/react'
import { useArgs } from '@storybook/preview-api'
import Checkbox from '../Checkbox/Checkbox'
import CheckboxGroup from './CheckboxGroup'

const meta = {
  title: 'Inputs/CheckboxGroup',
  component: CheckboxGroup,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    children: {
      control: {
        type: 'select',
        options: ['empty', 'links'],
      },
      mapping: {
        empty: [],
        links: <Checkbox value="1">Checkbox 1</Checkbox>,
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof CheckboxGroup>

export default meta
type Story = StoryObj<typeof meta>

const Template: Story = {
  render: ({ label, selectedValues, groupDisabled, children }) => {
    const [_, updateArgs] = useArgs<{
      selectedValues: (string | number)[]
      groupDisabled: boolean
    }>()

    const handleChange = (newArgs: (string | number)[]) => {
      return updateArgs({ selectedValues: newArgs })
    }

    return (
      <CheckboxGroup
        label={label}
        selectedValues={selectedValues}
        groupDisabled={groupDisabled}
        onChange={handleChange}
      >
        {children}
        <Checkbox value="2">Checkbox 2</Checkbox>
        <Checkbox value="3">Checkbox 3</Checkbox>
      </CheckboxGroup>
    )
  },
  args: {
    label: 'This is Checkbox group.',
    selectedValues: [],
    children: <Checkbox value="1">Checkbox 1</Checkbox>,
  },
}

export const DefaultCheckboxGroup: Story = {
  ...Template,
}
