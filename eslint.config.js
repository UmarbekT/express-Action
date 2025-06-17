export default [
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "module",
    },
    rules: {
      semi: "error",
      quotes: ["error", "double"],
      indent: ["error", 2],
    },
  },
];
