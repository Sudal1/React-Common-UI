import type { Meta, StoryObj } from '@storybook/react'
import Chip from './Chip'
import { useArgs } from '@storybook/preview-api'
import { Home, Add, Search, Setting } from '../../../lib/icons'

const Icons = {
  Home: <Home />,
  Add: <Add />,
  Search: <Search />,
  Setting: <Setting />,
}

const meta = {
  title: 'Data Display/Chip',
  component: Chip,
  parameters: {
    layout: 'fullscreen',
    controls: { exclude: ['Close'] },
  },
  args: {
    children: 'Defulat Chip!',
    isActive: false,
  },
  argTypes: {
    size: {
      options: ['sm', 'md'],
      control: {
        type: 'radio',
      },
    },
    leftIcon: {
      options: Object.keys(Icons),
      mapping: Icons,
      control: {
        type: 'select',
        labels: {
          Home: 'Home',
          Add: 'Add',
          Search: 'Search',
          Setting: 'Setting',
        },
      },
    },
    children: {
      type: 'string',
    },
    onClick: {
      control: 'func',
    },
    onRomove: {
      control: 'func',
    },
  },
  decorators: [
    (Story) => (
      <div style={{ display: 'flex', padding: '2.4rem', gap: '1.2rem', alignItems: 'center' }}>
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],
} satisfies Meta<typeof Chip>

export default meta
type Story = StoryObj<typeof meta>

export const DefalutChip: Story = {}

export const Size: Story = {
  render: ({ ...args }) => {
    return (
      <>
        <Chip {...args}>Small Chip</Chip>
        <Chip {...args} size="md">
          Medium Chip
        </Chip>
      </>
    )
  },
}

export const ActiveChip: Story = {
  args: {
    isActive: true,
    children: 'Active Chip!',
  },
}

export const ReadOnlyChip: Story = {
  args: {
    readOnly: true,
    children: 'ReadOnly Chip!',
  },
}

export const FilterChip: Story = {
  render: ({ isActive, onClick, onRomove, ...args }) => {
    const [_, updateArgs] = useArgs<{ isActive: boolean }>()

    const handleClick = () => {
      updateArgs({ isActive: !isActive })
    }
    const handleRomove = () => {
      alert('remove!')
    }

    return <Chip {...args} isActive={isActive} onClick={handleClick} onRomove={handleRomove} />
  },
}

export const ClickableChip: Story = {
  render: ({ isActive, onClick, onRomove, ...args }) => {
    const handleClick = () => {
      alert('hello!')
    }

    const handleRomove = () => {
      alert('remove!')
    }

    return <Chip {...args} isActive={isActive} onClick={handleClick} onRomove={handleRomove} />
  },
}
