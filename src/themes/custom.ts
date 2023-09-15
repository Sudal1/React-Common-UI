import { create } from '@storybook/theming'
import { colors } from '../lib/colors'

export default create({
  base: 'light',

  // UI
  colorSecondary: colors.primaryActive,

  // Typography
  fontBase: '"Noto Sans KR", "Nunito Sans", sans-serif',
  brandTitle: 'Dinggul Storybook',
  brandTarget: '_self',

  // Apps
  appBg: 'white',
  appContentBg: 'white',

  // Bars
  barBg: 'white',
  barTextColor: '#333333',
  barSelectedColor: colors.primaryActive,

  // Inputs
  inputBg: 'white',

  // Buttons
  buttonBg: 'white',
})
