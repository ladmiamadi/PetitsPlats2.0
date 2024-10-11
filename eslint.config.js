// eslint.config.js
import js from '@eslint/js';

export default [
  {
    files: ["**/*.js", "**/*.cjs", "**/*.mjs"],
    rules: {
      "prefer-const": "warn",
      "no-constant-binary-expression": "error"
    }
  }
];
