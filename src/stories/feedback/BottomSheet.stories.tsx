import type { Meta, StoryObj } from '@storybook/react'
import { RecoilRoot } from 'recoil'
import BottomSheet from './BottomSheet'

interface BottomSheetItem {
  name: string
  onClick(): void
}

const meta = {
  title: 'Global/BottomSheet',
  component: BottomSheet,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [(story) => <RecoilRoot>{story()}</RecoilRoot>],
} satisfies Meta<typeof BottomSheet>

export default meta
type Story = StoryObj<typeof meta>

const defaultItems: BottomSheetItem[] = [
  { name: 'Bottom Sheet 1', onClick: () => alert('1') },
  { name: 'Bottom Sheet 2', onClick: () => alert('2') },
  { name: 'Bottom Sheet 3', onClick: () => alert('3') },
  { name: 'Bottom Sheet 4', onClick: () => alert('4') },
]

export const Default: Story = {
  args: {
    visible: false,
    items: defaultItems,
  },
}

export const Visible: Story = {
  args: {
    visible: true,
    items: defaultItems,
  },
}
