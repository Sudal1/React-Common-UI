import type { Meta, StoryObj } from '@storybook/react'

import Button from './Button'
import ButtonGroup from './ButtonGroup'

const meta = {
  title: 'Inputs/ButtonGroup',
  component: ButtonGroup,
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    children: 'Button Text',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ButtonGroup>

export default meta
type Story = StoryObj<typeof meta>

export const DefaultButtonGroup: Story = {
  render: () => {
    return (
      <ButtonGroup variant="thrtiary">
        <Button>Button 1</Button>
        <Button href="https://naver.com" target="_blank">
          Link Button
        </Button>
        <Button>Button 3</Button>
      </ButtonGroup>
    )
  },
}
