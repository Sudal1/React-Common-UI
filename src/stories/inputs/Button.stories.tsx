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
    to: { table: { type: null } },
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
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const DefaultButton: Story = {
  render: (args) => {
    return <Button {...args} />
  },
  parameters: {
    docs: {
      source: {
        code: `
        import Button from './Button'

        <Button />   // props default { variant: 'primary', size: 'md', children: 'Button Text' }
        `,
        format: 'dedent',
      },
    },
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
  parameters: {
    docs: {
      source: {
        code: `
        <Button>Primary</Button>   // default variant 'primary'
        <Button variant="secondary">Secondary</Button>
        <Button variant="tertiary">Tertiary</Button>
        <Button variant="positive">Positive</Button>
        <Button variant="negative">Negative</Button>
        `,
        format: 'dedent',
      },
    },
  },
}

export const Size: Story = {
  render: (args) => {
    return (
      <>
        <Button size="sm" />
        <Button size="md" />
        <Button size="lg" />
      </>
    )
  },
  parameters: {
    docs: {
      source: {
        code: `
        <Button size="sm" />
        <Button size="md" />   // default size 'md'
        <Button size="lg" />
        `,
        format: 'dedent',
      },
    },
  },
}

export const LeftIconButton: Story = {
  render: (args) => {
    return <Button leftIcon={<Search />} />
  },
}

export const RightIconButton: Story = {
  render: (args) => {
    return <Button rightIcon={<Add />} />
  },
}

export const WideButton: Story = {
  render: (args) => {
    return <Button wide />
  },
}

export const DisabledButton: Story = {
  render: (args) => {
    return (
      <>
        <Button disabled>Primary</Button>
        <Button variant="secondary" disabled>
          Secondary
        </Button>
        <Button variant="tertiary" disabled>
          Tertiary
        </Button>
        <Button variant="positive" disabled>
          positive
        </Button>
        <Button variant="negative" disabled>
          negative
        </Button>
      </>
    )
  },
  parameters: {
    docs: {
      source: {
        code: `
        <Button disabled>Primary</Button>
        <Button variant="secondary" disabled>Secondary</Button>
        <Button variant="tertiary" disabled>Tertiary</Button>
        <Button variant="positive" disabled>positive</Button>
        <Button variant="negative" disabled>negative</Button>
        `,
        format: 'dedent',
      },
    },
  },
}
