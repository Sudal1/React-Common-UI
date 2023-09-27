import type { Meta, StoryObj } from '@storybook/react'
import { useArgs } from '@storybook/preview-api'
import PopperMenu from './PopperMenu'

const meta = {
  title: 'Feedback/PopperMenu',
  component: PopperMenu,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      <div style={{ padding: '2.4rem' }}>
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],
} satisfies Meta<typeof PopperMenu>

export default meta
type Story = StoryObj<typeof meta>

const Template: Story = {
  render: ({ visible, position }) => {
    const [_, updateArgs] = useArgs<{ visible: boolean }>()

    const handleClose = () => {
      updateArgs({ visible: !visible })
    }

    return <PopperMenu visible={visible} position={position} onClick={handleClose} />
  },
  args: {
    visible: false,
    position: 'end',
  },
}

export const Default: Story = {
  ...Template,
}
