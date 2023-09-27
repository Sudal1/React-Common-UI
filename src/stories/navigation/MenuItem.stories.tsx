import type { Meta, StoryObj } from '@storybook/react'
import MenuItem from './MenuItem'
import { Home, Add, Search, Setting } from '../../lib/icons'

const Icons = {
  Home: <Home />,
  Add: <Add />,
  Search: <Search />,
  Setting: <Setting />,
}

const meta = {
  title: 'Navigation/MenuItem',
  component: MenuItem,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
    },
    size: {
      options: ['sm', 'md', 'lg'],
      control: {
        type: 'radio',
      },
    },
    icon: {
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
} satisfies Meta<typeof MenuItem>

export default meta
type Story = StoryObj<typeof meta>

export const DefulatMenuItem: Story = {
  render: (args) => {
    return <MenuItem {...args} />
  },
  parameters: {
    docs: {
      source: {
        code: `
        <MenuItem />
        `,
      },
    },
  },
}

export const iconWithMenuItem: Story = {
  render: (args) => {
    return (
      <MenuItem {...args} icon={<Home />}>
        Home
      </MenuItem>
    )
  },
  parameters: {
    docs: {
      source: {
        code: `
        <MenuItem icon={<Home />}>Home</MenuItem>
        `,
      },
    },
  },
}

export const disabledMenuItem: Story = {
  render: (args) => {
    return (
      <MenuItem {...args} disabled>
        disabled MenuItem
      </MenuItem>
    )
  },
  parameters: {
    docs: {
      source: {
        code: `
        <MenuItem disabled>disabled MenuItem</MenuItem>
        `,
      },
    },
  },
}

export const Size: Story = {
  render: (args) => {
    return (
      <>
        <MenuItem {...args} size="sm">
          sm size MenuItem
        </MenuItem>
        <MenuItem {...args} size="md">
          md size MenuItem
        </MenuItem>
        <MenuItem {...args} size="lg">
          lg size MenuItem
        </MenuItem>
      </>
    )
  },
  parameters: {
    docs: {
      source: {
        code: `
        <MenuItem size="sm">sm size MenuItem</MenuItem>
        <MenuItem size="md">md size MenuItem</MenuItem> // default size 'md'
        <MenuItem size="lg">lg size MenuItem</MenuItem>
        `,
        format: 'dedent',
      },
    },
    controls: { exclude: ['size'] },
  },
  decorators: [
    (Story) => (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.6rem' }}>
        <Story />
      </div>
    ),
  ],
}
