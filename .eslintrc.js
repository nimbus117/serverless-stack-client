module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true
  },
  extends: [
    'eslint:recommended',
    'airbnb',
    'plugin:prettier/recommended',
    'prettier/react'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    angular: true
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: 'module'
    // sourceType: 'script'
  },
  plugins: ['prettier', 'react'],
  rules: {
    'prettier/prettier': 'warn',
    'react/jsx-filename-extension': ['off'],
    'react/jsx-props-no-spreading': ['off'],
    'react/prop-types': ['off']
  },
  settings: {
    react: {
      version: 'detect'
    }
  },
  overrides: [
    Object.assign(
      {
        files: ['**/*.test.js'],
        env: { jest: true },
        plugins: ['jest']
      },
      require('eslint-plugin-jest').configs.recommended
    )
  ]
};
