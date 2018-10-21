/**
 * Turns on CSS properties grouped by type.
 *
 * @see https://github.com/necolas/idiomatic-css#declaration-order
 * @see https://css-tricks.com/poll-results-how-do-you-order-your-css-properties/
 */

const propertiesOrder = require('./properties-order.json');

module.exports = {
  plugins: ['stylelint-order'],

  rules: {
    'order/order': ['custom-properties', 'declarations'],
    'order/properties-order': propertiesOrder,

    'comment-empty-line-before': [
      'always',
      {
        except: ['first-nested'],
        ignore: ['after-comment', 'stylelint-commands'],
      },
    ],
    'declaration-empty-line-before': [
      'always',
      {
        except: ['first-nested'],
        ignore: ['after-declaration'],
      },
    ],
  },
};
