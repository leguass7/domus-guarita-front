module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  parser: "@typescript-eslint/parser",
  extends: ["next", "plugin:@typescript-eslint/recommended"],
  plugins: [
    "@typescript-eslint",
    "prettier",
    "react-hooks",
    "jsx-a11y",
    "import-helpers",
    "formatjs",
  ],
  rules: {
    "prettier/prettier": "error",
    "@next/next/no-html-link-for-pages": "off",
    "react/jsx-key": "off",
  },
};
