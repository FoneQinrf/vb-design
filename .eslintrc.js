module.exports = {
  root: true,
  env: {
    node: true,
  },
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaFeatures: {
      globalReturn: false,
      impliedStrict: true,
      jsx: true,
      legacyDecorators: true,
    },
  },
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript/recommended',
    '@vue/eslint-config-prettier',
  ],
  globals: {
    MTH: 'readonly',
  },
  rules: {
    '@typescript-eslint/no-unused-vars': ['error'],
    'vue/multi-word-component-names': 0,
    '@typescript-eslint/no-var-requires': ['off'],
    'array-callback-return': ['off'],
    '@typescript-eslint/no-empty-function': 0,
    '@typescript-eslint/ban-ts-comment': 0,
  },
};
