import type { Meta, StoryObj } from '@storybook/react'
import Button from './Button'
import { Home, Add, Search, Setting } from '../../icons/Icons'

const Icons = {
  Home: <Home />,
  Add: <Add />,
  Search: <Search />,
  Setting: <Setting />,
}

const meta = {
  title: 'Inputs/Button',
  component: Button,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    children: {
      control: 'text',
    },
    variant: {
      options: ['primary', 'secondary', 'tertiary', 'positive', 'negative'],
      control: {
        type: 'radio',
      },
    },
    size: {
      options: ['sm', 'md', 'lg'],
      control: {
        type: 'radio',
      },
    },
    to: { table: { disable: true } },
    wide: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
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
    rightIcon: {
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
  },
  decorators: [
    (Story) => (
      <div style={{ display: 'flex', padding: '2.4rem' }}>
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const DefaultButton: Story = {
  render: (args) => {
    return <Button {...args} />
  },
}

export const Variant: Story = {
  render: (args) => {
    return (
      <>
        <Button>Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="tertiary">Tertiary</Button>
        <Button variant="positive">Positive</Button>
        <Button variant="negative">Negative</Button>
      </>
    )
  },
}

export const Size: Story = {
  render: (args) => {
    return (
      <>
        <Button {...args} size="sm" />
        <Button {...args} size="md" />
        <Button {...args} size="lg" />
      </>
    )
  },
}

export const LeftIconButton: Story = {
  render: (args) => {
    return <Button {...args} leftIcon={<Search />} />
  },
}

export const RightIconButton: Story = {
  render: (args) => {
    return <Button {...args} rightIcon={<Add />} />
  },
}

export const WideButton: Story = {
  render: (args) => {
    return <Button {...args} wide />
  },
}

export const DisabledButton: Story = {
  render: (args) => {
    return <Button {...args} disabled />
  },
}
