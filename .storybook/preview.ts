import type { Preview } from '@storybook/react'
import { withThemeFromJSXProvider } from '@storybook/addon-styling'
import Global from '../src/lib/reset'

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
    GlobalStyles: Global,
  }),
]
