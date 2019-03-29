module.exports = {
  extends: "arcticicestudio-base",
  plugins: ["prettier"],
  parser: "babel-eslint",
  env: {
    node: true,
    browser: true
  },
  rules: {
    "prettier/prettier": "error"
  }
}