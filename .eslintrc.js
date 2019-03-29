module.exports = {
  extends: "standard",
  plugins: [ "prettier" ],
  parserOptions: {
    parser: 'babel-eslint',
    'ecmaVersion': 6
  },
  parser: "babel-eslint",
  env: {
    node: true,
    browser: true
  },
  rules: {
    'generator-star-spacing': 'off',
  }
}