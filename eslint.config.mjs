import globals from "globals";
import pluginJs from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";

export default [
  eslintConfigPrettier,
  {
    files: ["./src/*.js"],
    ignores: [".config/*"],
    languageOptions: { sourceType: "script" },
  },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
];
