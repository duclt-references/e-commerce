const path = require('path');

module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        moduleDirectory: ['node_modules', 'src/'],
      },
      typescript: {
        project: path.resolve(__dirname, './tsconfig.json'),
      },
    },
  },
  extends: [
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:jsx-a11y/recommended',
    'plugin:eslint-comments/recommended',
    'plugin:prettier/recommended',
    'eslint:recommended',
    'eslint-config-prettier',
    'prettier',
  ],
  plugins: ['prettier'],
  env: {
    node: true,
    browser: true,
  },
  rules: {
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['error'],
    '@typescript-eslint/no-var-requires': 'off',
    'react/prop-types': 'off',
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    'import/no-unresolved': 'off',
    'prettier/prettier': [
      'warn',
      {
        arrowParens: 'always',
        singleQuote: true,
        semi: true,
        trailingComma: 'es5',
        printWidth: 80,
        tabWidth: 2,
        endOfLine: 'auto',
      },
    ],
  },
};
