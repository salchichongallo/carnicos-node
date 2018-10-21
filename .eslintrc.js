module.exports = {
  root: true,

  parser: 'typescript-eslint-parser',

  extends: ['eslint:recommended', 'airbnb', 'prettier', 'prettier/react', 'typescript' ],

  plugins: ['prettier', 'react'],

  env: {
    es6: true,
    node: true,
    browser: true,
    'shared-node-browser': true,
  },

  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },

  rules: {
    'prettier/prettier': 'warn',

    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/order': [
      'warn',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
        ],
        'newlines-between': 'always-and-inside-groups',
      },
    ],

    'react/destructuring-assignment': 'off',
    'react/prefer-stateless-function': 'off',
    'react/jsx-filename-extension': ['warn', { extensions: ['.tsx'] }],

    'typescript/no-var-requires': 'off',
    'typescript/member-ordering': 'off',
    'typescript/no-non-null-assertion': 'off',
    'typescript/interface-name-prefix': 'off',
    'typescript/explicit-function-return-type': 'off',
  },

  settings: {
    'import/parsers': {
      'typescript-eslint-parser': ['.js', '.ts', '.tsx'],
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.ts', '.tsx'],
      },
    },
  },
};
