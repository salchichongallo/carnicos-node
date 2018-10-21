module.exports = {
  defaultSeverity: 'warning',

  processors: ['stylelint-processor-styled-components'],

  extends: [
    'stylelint-config-standard',
    'stylelint-config-styled-components',
    'stylelint-config-prettier',
    './tools/stylelint/config-order-type',
  ],

  rules: {
    'selector-max-specificity': '0,3,0',

    'no-duplicate-selectors': null,
    'no-descending-specificity': null,
    'font-family-no-missing-generic-family-keyword': null,
  },
};
