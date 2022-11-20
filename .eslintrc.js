module.exports = {
  plugins: [
    'react',
    'react-hooks',
    'import',
    'unused-imports',
    'jest',
    'prettier',
  ],
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:prettier/recommended',
    'plugin:import/typescript',
  ],
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/require-default-props': 'off',
    'react/prop-types': 'off',
    'react-hooks/exhaustive-deps': 'error',
    'import/prefer-default-export': 'off',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: ['src/mocks/**/*.js'],
      },
    ],
    'import/no-named-as-default': 'off',
    'unused-imports/no-unused-imports': 'warn',
    'no-param-reassign': [
      'error',
      {
        props: false,
      },
    ],
    'jsx-a11y/label-has-associated-control': [
      2,
      {
        labelComponents: ['CustomInputLabel'],
        labelAttributes: ['label'],
        controlComponents: ['CustomInput'],
        depth: 3,
      },
    ],
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
  },
  overrides: [
    {
      files: '**/*.+(ts|tsx)',
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: './tsconfig.json',
      },
      plugins: ['@typescript-eslint'],
      extends: [
        'plugin:@typescript-eslint/recommended',
        'airbnb-typescript',
        'plugin:prettier/recommended',
      ],
      rules: {
        'react/function-component-definition': [
          2,
          {
            namedComponents: 'arrow-function',
            unnamedComponents: 'arrow-function',
          },
        ],
        '@typescript-eslint/quotes': [
          2,
          'backtick',
          {
            avoidEscape: true,
          },
        ],
        '@typescript-eslint/no-unused-vars': 'warn',
        'import/no-extraneous-dependencies': [
          'error',
          {
            devDependencies: [
              'src/mocks/**/*.ts',
              '**/*.stories.*',
              '**/.storybook/**/*.*',
            ],
            peerDependencies: true,
          },
        ],
      },
    },
  ],
};
