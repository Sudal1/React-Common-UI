import type { Meta, StoryObj } from '@storybook/react'
import { useArgs } from '@storybook/preview-api'
import { RecoilRoot } from 'recoil'
import { useDialogActions } from 'states/dialog'
import Button from 'stories/inputs/Button/Button'
import Dialog from './Dialog'

const meta = {
  title: 'Global/Dialog',
  component: Dialog,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Dialog>

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
  render: ({ visible, onClose, onConfirm, ...rest }) => {
    const [_, updateArgs] = useArgs()
    const { open, close } = useDialogActions()

    const dummyConfig = {
      title: 'Do you like Storybook?',
      description: 'Please log in to leave a review.',
      confirmText: 'Login',
      onConfirm: () => {
        alert('Go to Log-in!')
        handleClose()
      },
      mode: 'YESNO',
    } as const

    const handleClose = () => {
      close()
      updateArgs({ visible: !visible })
    }

    const handleOpen = () => {
      open({ ...dummyConfig })
      updateArgs({ visible: !visible, ...dummyConfig })
    }

    return (
      <>
        <Button onClick={handleOpen}>Click !</Button>
        <Dialog visible={visible} onClose={handleClose} onConfirm={dummyConfig.onConfirm} {...rest} />
      </>
    )
  },
  args: {
    visible: false,
    title: '',
  },
}

export const Visible: Story = {
  ...Template,
}
