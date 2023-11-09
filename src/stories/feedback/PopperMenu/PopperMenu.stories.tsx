import type { Meta, StoryObj } from '@storybook/react'
import { useArgs } from '@storybook/preview-api'
import PopperMenu from './PopperMenu'
import MenuItem from 'stories/navigation/MenuItem/MenuItem'
import { Home, Add, Search } from '../../../lib/icons'

const meta = {
  title: 'Feedback/PopperMenu',
  component: PopperMenu,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    position: {
      options: ['top-start', 'top', 'top-end', 'bottom-start', 'bottom', 'bottom-end'],
      control: {
        type: 'radio',
      },
    },
  },
  decorators: [
    (Story) => (
      <div style={{ minHeight: '60rem', padding: '30rem' }}>
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],
} satisfies Meta<typeof PopperMenu>

export default meta
type Story = StoryObj<typeof meta>

const Template: Story = {
  render: ({ position, visible, buttonChildren, children }) => {
    const [_, updateArgs] = useArgs<{ visible: boolean }>()

    const handleClose = () => {
      updateArgs({ visible: !visible })
    }

    return (
      <PopperMenu position={position} visible={visible} buttonChildren={buttonChildren} onClick={handleClose}>
        {children}
      </PopperMenu>
    )
  },
  args: {
    visible: false,
    position: 'top-start',
    buttonChildren: 'Click me!',
    children: [
      { key: 1, icon: <Home />, children: 'First item!' },
      { key: 2, icon: <Add />, children: 'Second item!' },
      { key: 3, icon: <Search />, children: 'Last item!' },
    ].map((item) => (
      <MenuItem key={item.key} icon={item.icon} size="sm">
        {item.children}
      </MenuItem>
    )),
  },
}

export const Default: Story = {
  ...Template,
}
