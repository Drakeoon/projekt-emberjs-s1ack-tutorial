module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module'
  },
  extends: ['eslint:recommended', 'plugin:ember/recommended'],
  env: {
    browser: true
  },
  rules: {
    'no-console': [1, { allow: ['warn', 'error'] }],
    'comma-dangle': [2, 'only-multiline'],
    'space-before-function-paren': 'off',
    'no-extra-semi': 2,
    quotes: [2, 'single', 'avoid-escape'],
  }
};
