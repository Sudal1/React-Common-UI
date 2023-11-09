import type { Meta, StoryObj } from '@storybook/react'
import { useArgs } from '@storybook/preview-api'
import { RecoilRoot } from 'recoil'
import { useBottomSheetActions } from 'states/bottomSheet'
import Button from 'stories/inputs/Button/Button'
import BottomSheet from './BottomSheet'

interface BottomSheetItem {
  name: string
  onClick?(): void
}

const meta = {
  title: 'Global/BottomSheet',
  component: BottomSheet,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof BottomSheet>

export default meta
type Story = StoryObj<typeof meta>

const Template: Story = {
  decorators: [
    (Story) => (
      <RecoilRoot>
        <div style={{ minHeight: '250px', padding: '2.4rem' }}>
          <Story />
        </div>
      </RecoilRoot>
    ),
  ],
  render: ({ visible, items }) => {
    const [_, updateArgs] = useArgs<{ visible: boolean; items: BottomSheetItem[] }>()
    const { open, close } = useBottomSheetActions()

    const dummyItems = [
      { name: 'Bottom Sheet 1', onClick: () => alert('1') },
      { name: 'Bottom Sheet 2', onClick: () => alert('2') },
      { name: 'Bottom Sheet 3', onClick: () => alert('3') },
      { name: 'Bottom Sheet 4', onClick: () => alert('4') },
    ]

    const handleClose = () => {
      close()
      updateArgs({ visible: !visible })
    }

    const handleOpen = () => {
      open(dummyItems)
      updateArgs({ visible: !visible, items: dummyItems })
    }

    return (
      <>
        <Button onClick={handleOpen}>Click !</Button>
        <BottomSheet visible={visible} items={items} onClose={handleClose} />
      </>
    )
  },
  args: {
    visible: false,
    items: [{ name: 'Bottom Sheet 1', onClick: () => alert('1') }],
  },
}

export const Visible: Story = {
  ...Template,
}
