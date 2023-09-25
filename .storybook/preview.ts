import type { Preview } from '@storybook/react'
import { withThemeFromJSXProvider } from '@storybook/addon-styling'
import { ThemeProvider } from '@emotion/react'
import { lightTheme, darkTheme } from '../src/themes/theme'
import Global from '../src/css/reset'

export const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      expanded: true,
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
}

export const parameters = {
  viewMode: 'docs',
  docs: {
    toc: {
      contentsSelector: '.sbdocs-content',
      headingSelector: 'h1, h2, h3',
      ignoreSelector: '#primary',
      title: 'Table of Contents',
      disable: false,
      unsafeTocbotOptions: {
        orderedList: false,
      },
    },
  },
  previewTabs: {
    canvas: { hidden: true },
  },
}

export const decorators = [
  withThemeFromJSXProvider({
    themes: {
      light: lightTheme,
      dark: darkTheme,
    },
    defaultTheme: 'light',
    Provider: ThemeProvider,
    GlobalStyles: Global,
  }),
]
