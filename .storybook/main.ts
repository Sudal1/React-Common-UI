import type { StorybookConfig } from '@storybook/react-webpack5'

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx|mdx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-styling',
    '@storybook/addon-interactions',
    '@storybook/addon-mdx-gfm',
    '@storybook/preset-create-react-app',
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  docs: {
    autodocs: 'tag',
    defaultName: 'Documentation',
  },
  staticDirs: ['..\\public'],
  typescript: {
    // Overrides the default Typescript configuration to allow multi-package components to be documented via Autodocs.
    reactDocgen: 'react-docgen',
    skipBabel: true,
    check: false,
  },
}

export default config
