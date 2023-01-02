module.exports = {
  env: {
    es6: true,
    node: true,
    commonjs: true,
    browser: true,
  },
  root: true,
  extends: [
    "plugin:prettier/recommended",
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  overrides: [],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
  },
  plugins: ["@typescript-eslint", "prettier"],

  rules: {
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
      },
    ],
    "no-debugger": "off",
    "no-console": 0,
    "class-methods-use-this": "off",
    indent: ["error", 2],
    semi: ["error", "always"],
    quotes: ["error", "double"],
    // "linebreak-style": ["error", "unix"],
    "no-multi-spaces": "error",
    "space-in-parens": "error",
    "no-multiple-empty-lines": "error",
    "@typescript-eslint/no-var-requires": 0,
    "@typescript-eslint/no-explicit-any": "warn",
    "for-direction": "off",
    // "prettier/prettier": "error",
  },
};
