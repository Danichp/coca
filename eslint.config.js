import globals from 'globals';
import pluginJs from '@eslint/js';
import { rules } from 'eslint-config-prettier';

export default [
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  {
    extends: ['eslint:recommended', 'plugin:prettier/recomended'],
    rules: {
      'prettier/prettier': 'error',
    },
  },
];
