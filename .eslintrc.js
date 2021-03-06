module.exports = {
  env: {
    // https://cn.eslint.org/docs/user-guide/configuring#specifying-environments
    webextensions: true,
    browser: true,
    es2021: true,
  },

  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],

  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },

  plugins: [
    'react',
  ],

  rules: {
    'max-len': ['off'],
    'no-multiple-empty-lines': ['error', { max: 3, maxEOF: 1 }],
  },
};
