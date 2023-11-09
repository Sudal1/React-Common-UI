import type { Meta, StoryObj } from '@storybook/react'
import Toast from './Toast'
import { Warning, Error, Info, Done, Help } from '../../../lib/icons'

const Icons = {
  Warning: <Warning />,
  Error: <Error />,
  Info: <Info />,
  Help: <Help />,
  Done: <Done />,
}

const meta = {
  title: 'Feedback/Toast',
  component: Toast,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    variant: {
      options: ['primary', 'positive', 'negative', 'warning'],
      control: {
        type: 'radio',
      },
    },
    leftIcon: {
      options: Object.keys(Icons),
      mapping: Icons,
      control: {
        type: 'select',
        labels: Object.entries(Icons),
      },
    },
    onClick: {
      control: 'func',
    },
    onClose: {
      control: 'func',
    },
    isVisible: {
      control: 'boolean',
    },
    closeable: {
      control: 'boolean',
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
} satisfies Meta<typeof Toast>

export default meta
type Story = StoryObj<typeof meta>

const Template: Story = {
  render: ({ ...args }) => {
    return <Toast {...args} />
  },
}

export const DefaultToast: Story = {
  ...Template,
}

export const IconWithToast: Story = {
  ...Template,
  args: {
    leftIcon: <Info />,
  },
}

export const ButtonWithToast: Story = {
  render: ({ onClick, ...args }) => {
    const handleClick = () => {
      alert('hello!')
    }

    return <Toast {...args} onClick={handleClick} />
  },
  args: {
    leftIcon: <Info />,
  },
}
