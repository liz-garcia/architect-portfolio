/**
 * Eslint configuration file for the client.
 * Note: If a change is made here, consider if it should be applied in the server config file as well.
 *
 * ESlint is a way to enforce certain code rules to keep the code base consistent.
 *
 * Have a look at this project repo's README or https://eslint.org/ for more information.
 */

module.exports = {
  root: true,
  env: { browser: true, es2020: true, node: true },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
    "plugin:prettier/recommended",
  ],
  ignorePatterns: ["dist"],
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  settings: { react: { version: "18.2" } },
  plugins: ["react-refresh"],
  rules: {
    "react/jsx-no-target-blank": "off",
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    quotes: ["error", "double"],
    // * Receive warnings for console.log.
    // * Can also be set to "warn" or "error".
    "no-console": "error",
  },
};
