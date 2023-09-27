import { addons } from '@storybook/manager-api'
import customTheme from '../src/lib/theme'

addons.setConfig({
  theme: customTheme,
})
