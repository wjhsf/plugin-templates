/*
 * Copyright (c) 2022, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
module.exports = {
  extends: ['eslint-config-salesforce-typescript', 'eslint-config-salesforce-license', 'plugin:sf-plugin/recommended'],
  rules: {
    'ban-ts-ignore': 'off',
    '@typescript-eslint/ban-ts-ignore': 'off',
    camelcase: 'off',
    '@typescript-eslint/camelcase': 'off',
    'constructor-super': 'warn',
    curly: 'error',
    eqeqeq: 'error',
    'no-buffer-constructor': 'error',
    'no-caller': 'error',
    'no-debugger': 'warn',
    'no-duplicate-case': 'error',
    'no-duplicate-imports': 'error',
    'no-eval': 'error',
    'no-extra-semi': 'warn',
    'no-redeclare': 'error',
    'no-sparse-arrays': 'error',
    'no-throw-literal': 'error',
    'no-unsafe-finally': 'warn',
    'no-unused-labels': 'warn',
    'no-restricted-globals': ['warn', 'name', 'length', 'event', 'closed', 'external', 'status', 'origin', 'context'], // non-complete list of globals that are easy to access unintentionally
    'no-var': 'error',
    'jsdoc/no-types': 'warn',
    '@typescript-eslint/semi': 'warn',
    'header/header': [
      2,
      'block',
      [
        '',
        {
          pattern: ' \\* Copyright \\(c\\) \\d{4}, salesforce\\.com, inc\\.',
          template: ' * Copyright (c) 2022, salesforce.com, inc.',
        },
        ' * All rights reserved.',
        ' * Licensed under the BSD 3-Clause license.',
        ' * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause',
        ' ',
      ],
    ],
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['off'],
    '@typescript-eslint/no-empty-function': ['off'],
    '@typescript-eslint/no-explicit-any': ['off'],
    '@typescript-eslint/ban-ts-comment': ['off'],
    '@typescript-eslint/no-non-null-assertion': ['off'],
    '@typescript-eslint/no-var-requires': ['off'],
  },
};
