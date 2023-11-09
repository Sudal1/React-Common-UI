import type { Meta, StoryObj } from '@storybook/react'
import Avatar from './Avatar'

const meta = {
  title: 'Media/Avatar',
  component: Avatar,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg'],
      control: {
        type: 'radio',
      },
    },
    src: {
      type: 'string',
    },
    text: {
      type: 'string',
    },
    disabled: {
      type: 'boolean',
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
} satisfies Meta<typeof Avatar>

export default meta
type Story = StoryObj<typeof meta>

const Template: Story = {
  render: ({ ...args }) => {
    return <Avatar {...args} />
  },
}

export const AvatarWithSource: Story = {
  ...Template,
  args: {
    src: 'https://cdn.pixabay.com/photo/2019/08/07/14/11/dog-4390885_1280.jpg',
  },
}

export const AvatarWithText: Story = {
  ...Template,
  args: {
    text: 'k',
  },
}

export const Size: Story = {
  render: ({ ...args }) => {
    return (
      <>
        <Avatar {...args} size="sm" />
        <Avatar {...args} />
        <Avatar {...args} size="lg" />
      </>
    )
  },
  args: {
    src: 'https://cdn.pixabay.com/photo/2019/08/07/14/11/dog-4390885_1280.jpg',
  },
}

export const DisabledAvatar: Story = {
  ...Template,
  args: {
    src: 'https://cdn.pixabay.com/photo/2019/08/07/14/11/dog-4390885_1280.jpg',
    disabled: true,
  },
}
