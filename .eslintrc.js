module.exports = {
  root: true,

  env: {
    es2021: true,
    node: true,
    browser: true,
  },

  ignorePatterns: ['.eslintrc.js'],

  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: { jsx: true },
    ecmaVersion: 12,
    sourceType: 'module',
    useJSXTextNode: true,
  },

  extends: [
    'eslint:recommended',
    'eslint-config-prettier',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:storybook/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  plugins: ['@typescript-eslint', 'prettier', 'react', '@emotion'],
  settings: { react: { version: 'detect' } },

  rules: {
    semi: ['error', 'never'],
    indent: ['error', 2],
    'no-unused-vars': 'off',
    'react/no-unescaped-entities': 'off',
    '@typescript-eslint/semi': 'off',
    '@typescript-eslint/indent': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
  },
}
