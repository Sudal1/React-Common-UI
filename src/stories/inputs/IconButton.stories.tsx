import type { Meta, StoryObj } from '@storybook/react'
import IconButton from './IconButton'
import { Home, PlusCircle, Search, Setting } from '../../icons/Icons'

const Icons = {
  Home: <Home />,
  PlusCircle: <PlusCircle />,
  Search: <Search />,
  Setting: <Setting />,
}

const meta = {
  title: 'Inputs/IconButton',
  component: IconButton,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    children: {
      options: Object.keys(Icons),
      mapping: Icons,
      control: {
        type: 'select',
        labels: {
          Home: 'Home',
          PlusCircle: 'PlusCircle',
          Search: 'Search',
          Setting: 'Setting',
        },
      },
    },
    disabled: {
      table: { defaultValue: { summary: false } },
    },
  },
  args: {
    size: 'md',
    children: <Home />,
    disabled: false,
  },
  tags: ['autodocs'],
} satisfies Meta<typeof IconButton>

export default meta
type Story = StoryObj<typeof meta>

export const ContainedIconButton: Story = {
  args: {
    variant: 'contained',
  },
}

export const OutlineIconButton: Story = {
  args: {
    variant: 'outlined',
  },
}

export const GhostIconButton: Story = {
  args: {
    variant: 'ghost',
  },
}
