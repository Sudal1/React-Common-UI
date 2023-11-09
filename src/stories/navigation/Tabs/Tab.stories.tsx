import type { Meta, StoryObj } from '@storybook/react'
import Tab from './Tab'

import {
  OutlineHeart,
  OutlineThumUp,
  OutlineThumDown,
  OutlineSmile,
  OutlineFrown,
  OutlineBookmark,
} from '../../../lib/icons'

const Icons = {
  OutlineHeart: <OutlineHeart />,
  OutlineThumUp: <OutlineThumUp />,
  OutlineThumDown: <OutlineThumDown />,
  OutlineSmile: <OutlineSmile />,
  OutlineFrown: <OutlineFrown />,
  OutlineBookmark: <OutlineBookmark />,
}

const meta = {
  title: 'Navigation/Tabs/Tab',
  component: Tab,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
    },
    variant: {
      options: ['primary', 'secondary', 'tertiary'],
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
    rightIcon: {
      options: Object.keys(Icons),
      mapping: Icons,
      control: {
        type: 'select',
        labels: Object.entries(Icons),
      },
    },
    isActive: {
      control: {
        type: 'boolean',
      },
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
  },
  decorators: [
    (Story) => (
      <div style={{ padding: '2.4rem', width: '28em' }}>
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],
} satisfies Meta<typeof Tab>

export default meta
type Story = StoryObj<typeof meta>

export const DefulatTab: Story = {
  render: (args) => {
    return <Tab {...args} />
  },
  parameters: {
    docs: {
      source: {
        code: `
        <Tab />
        `,
      },
    },
  },
}

export const leftIconWithTab: Story = {
  render: (args) => {
    return (
      <Tab {...args} leftIcon={<OutlineSmile />}>
        leftIcon With Tab
      </Tab>
    )
  },
}

export const rightIconWithTab: Story = {
  render: (args) => {
    return (
      <Tab {...args} rightIcon={<OutlineSmile />}>
        leftIcon With Tab
      </Tab>
    )
  },
}

export const DisabledTab: Story = {
  render: (args) => {
    return (
      <Tab {...args} disabled>
        disabled Tab
      </Tab>
    )
  },
}
