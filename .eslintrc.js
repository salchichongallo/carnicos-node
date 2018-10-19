module.exports = {
  root: true,

  parser: 'typescript-eslint-parser',

  extends: ['eslint:recommended', 'airbnb-base', 'prettier', 'typescript' ],

  plugins: ['prettier'],

  env: {
    es6: true,
    node: true,
    browser: true,
    'shared-node-browser': true,
  },

  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
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

    'typescript/no-var-requires': 'off',
    'typescript/member-ordering': 'off',
    'typescript/no-non-null-assertion': 'off',
    'typescript/interface-name-prefix': 'off',
    'typescript/explicit-function-return-type': 'off',
  },

  settings: {
    'import/parsers': {
      'typescript-eslint-parser': ['.js', '.ts'],
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.ts'],
      },
    },
  },
};
