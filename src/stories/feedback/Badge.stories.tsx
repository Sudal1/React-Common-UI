import type { Meta, StoryObj } from '@storybook/react'
import Badge from './Badge'
import Button from '../inputs/Button'
import { Mail, Bell } from '../../lib/icons'

const meta = {
  title: 'Feedback/Badge',
  component: Badge,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {},
  decorators: [
    (Story) => (
      <div style={{ padding: '2.4rem' }}>
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],
} satisfies Meta<typeof Badge>

export default meta
type Story = StoryObj<typeof meta>

export const DefaultBadge: Story = {
  render: (args) => {
    return (
      <Badge {...args}>
        <Button size="sm">Primary</Button>
      </Badge>
    )
  },
  parameters: {
    docs: {
      source: {
        code: `
        <Badge>
           <Button size="sm">Primary</Button>
        </Badge>
        `,
        format: 'dedent',
      },
    },
  },
}

export const BadgeWithIconButton: Story = {
  render: (args) => {
    return (
      <>
        <Badge {...args}>
          <Button size="sm">
            <Bell />
          </Button>
        </Badge>

        <Badge {...args}>
          <Button size="sm" variant="secondary">
            <Bell />
          </Button>
        </Badge>

        <Badge {...args} overlap="circular">
          <Button variant="tertiary" size="sm">
            <Bell />
          </Button>
        </Badge>

        <Badge {...args} variant="counter">
          <Button>
            <Mail />
          </Button>
        </Badge>

        <Badge {...args} variant="counter">
          <Button variant="secondary">
            <Mail />
          </Button>
        </Badge>

        <Badge {...args} variant="counter" overlap="circular">
          <Button variant="tertiary">
            <Mail />
          </Button>
        </Badge>

        <Badge {...args} variant="counter">
          <Button size="lg">
            <Mail />
          </Button>
        </Badge>

        <Badge {...args} variant="counter">
          <Button variant="secondary" size="lg">
            <Mail />
          </Button>
        </Badge>

        <Badge {...args} variant="counter" overlap="circular">
          <Button variant="tertiary" size="lg">
            <Mail />
          </Button>
        </Badge>
      </>
    )
  },
  decorators: [
    (Story) => (
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Story />
      </div>
    ),
  ],
}
