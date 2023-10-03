import type { Meta, StoryObj } from '@storybook/react'
import { useArgs } from '@storybook/client-api'
import IconToggleButton from './IconToggleButton'

import {
  FillHeart,
  OutlineHeart,
  FillThumUp,
  OutlineThumUp,
  FillThumDown,
  OutlineThumDown,
  FillSmile,
  OutlineSmile,
  FillFrown,
  OutlineFrown,
  FillBookmark,
  OutlineBookmark,
} from '../../lib/icons'

const activeIcons = {
  FillHeart: <FillHeart />,
  FillThumUp: <FillThumUp />,
  FillThumDown: <FillThumDown />,
  FillSmile: <FillSmile />,
  FillFrown: <FillFrown />,
  FillBookmark: <FillBookmark />,
}

const inactiveIcons = {
  OutlineHeart: <OutlineHeart />,
  OutlineThumUp: <OutlineThumUp />,
  OutlineThumDown: <OutlineThumDown />,
  OutlineSmile: <OutlineSmile />,
  OutlineFrown: <OutlineFrown />,
  OutlineBookmark: <OutlineBookmark />,
}

const meta = {
  title: 'Inputs/IconToggleButton',
  component: IconToggleButton,
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
    color: {
      options: ['primary', 'liked', 'positive', 'negative'],
      control: {
        type: 'radio',
      },
    },
    activeIcon: {
      options: Object.keys(activeIcons),
      mapping: activeIcons,
      control: {
        type: 'select',
        labels: {
          FillHeart: 'Heart',
          FillThumUp: 'ThumUp',
          FillThumDown: 'ThumDown',
          FillSmile: 'Smile',
          FillFrown: 'Frown',
          FillBookmark: 'Bookmark',
        },
      },
    },
    inactiveIcon: {
      options: Object.keys(inactiveIcons),
      mapping: inactiveIcons,
      control: {
        type: 'select',
        labels: {
          OutlineHeart: 'Heart',
          OutlineThumUp: 'ThumUp',
          OutlineThumDown: 'ThumDown',
          OutlineSmile: 'Smile',
          OutlineFrown: 'Frown',
          OutlineBookmark: 'Bookmark',
        },
      },
    },
    isActive: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof IconToggleButton>

export default meta
type Story = StoryObj<typeof meta>

const Template: Story = {
  render: ({ ...args }) => {
    const [_, updateArgs] = useArgs()

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      updateArgs({ checked: event.target.checked })
    }

    return <IconToggleButton {...args} />
  },
  args: {
    activeIcon: <FillHeart />,
    inactiveIcon: <OutlineHeart />,
  },
}

export const DefaultIconToggleButton: Story = {
  ...Template,
}
