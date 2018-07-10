// http://stylelint.io/user-guide/rules/

'use strict';

module.exports = {
  rules: {
    'color-hex-case'  : 'lower',
    'color-hex-length': 'short',

    'font-family-name-quotes': 'always-where-recommended',
    'font-weight-notation'   : 'named-where-possible',

    'function-calc-no-unspaced-operator'               : true,
    'function-comma-newline-after'                     : 'never-multi-line',
    'function-comma-newline-before'                    : 'never-multi-line',
    'function-comma-space-after'                       : 'always',
    'function-comma-space-before'                      : 'never',
    'function-linear-gradient-no-nonstandard-direction': true,
    'function-max-empty-lines'                         : 0,
    'function-name-case'                               : 'lower',
    'function-parentheses-newline-inside'              : 'always-multi-line',
    'function-parentheses-space-inside'                : 'never',
    'function-url-no-scheme-relative'                  : true,
    'function-url-quotes'                              : 'always',
    'function-url-scheme-whitelist'                    : ['http', 'https', 'data'],

    'number-leading-zero'     : 'never',
    'number-max-precision'    : 2,
    'number-no-trailing-zeros': true,

    'string-no-newline': true,
    'string-quotes'    : 'double',

    'length-zero-no-unit': true,

    'unit-case'      : 'lower',
    'unit-no-unknown': true,

    'value-keyword-case'             : 'lower',
    'value-no-vendor-prefix'         : true, // please use AutoPrefixer
    'value-list-comma-newline-after' : 'always-multi-line',
    'value-list-comma-newline-before': 'never-multi-line',
    'value-list-comma-space-after'   : 'always',
    'value-list-comma-space-before'  : 'never',
    'value-list-max-empty-lines'     : 0,

    'custom-property-empty-line-before': 'never',

    'shorthand-property-no-redundant-values': true,

    'property-case'            : 'lower',
    'property-no-unknown'      : true,
    'property-no-vendor-prefix': true, // please use AutoPrefixer

    'keyframe-declaration-no-important': true,

    'declaration-bang-space-after'  : 'never',
    'declaration-bang-space-before' : 'always',
    'declaration-colon-space-after' : 'always',
    'declaration-colon-space-before': 'never',
    'declaration-no-important'      : true,

    'declaration-block-no-duplicate-properties'         : true,
    'declaration-block-no-redundant-longhand-properties': true,
    'declaration-block-no-shorthand-property-overrides' : true,
    'declaration-block-semicolon-newline-after'         : 'always',
    'declaration-block-semicolon-newline-before'        : 'never-multi-line',
    'declaration-block-semicolon-space-after'           : 'always-single-line',
    'declaration-block-semicolon-space-before'          : 'never',

    'declaration-block-trailing-semicolon': 'always',

    'block-closing-brace-empty-line-before': 'never',
    'block-closing-brace-newline-after'    : 'always',
    'block-closing-brace-newline-before'   : 'always',
    'block-closing-brace-space-after'      : 'never-single-line',
    'block-closing-brace-space-before'     : 'never-single-line',
    'block-no-empty'                       : true,
    'block-opening-brace-newline-after'    : 'always',
    'block-opening-brace-newline-before'   : 'never-single-line',
    'block-opening-brace-space-after'      : 'never-single-line',
    'block-opening-brace-space-before'     : 'always',

    'selector-attribute-brackets-space-inside'   : 'never',
    'selector-attribute-operator-space-after'    : 'never',
    'selector-attribute-operator-space-before'   : 'never',
    'selector-attribute-quotes'                  : 'always',
    'selector-combinator-space-after'            : 'always',
    'selector-combinator-space-before'           : 'always',
    'selector-descendant-combinator-no-non-space': true,
    'selector-max-compound-selectors'            : 3,
    'selector-no-qualifying-type'                : true,

    'selector-no-vendor-prefix'                     : true,
    'selector-pseudo-class-case'                    : 'lower',
    'selector-pseudo-class-no-unknown'              : true,
    'selector-pseudo-class-parentheses-space-inside': 'never',
    'selector-pseudo-element-case'                  : 'lower',
    'selector-pseudo-element-colon-notation'        : 'single',
    'selector-pseudo-element-no-unknown'            : true,
    'selector-type-case'                            : 'lower',
    'selector-type-no-unknown'                      : true,
    'selector-max-empty-lines'                      : 0,

    'selector-list-comma-newline-after' : 'always',
    'selector-list-comma-newline-before': 'never-multi-line',
    'selector-list-comma-space-after'   : 'always-single-line',
    'selector-list-comma-space-before'  : 'never',


    'rule-empty-line-before': ['always-multi-line', {
      except: [
        'after-single-line-comment',
        'first-nested'
      ]
    }],

    'media-feature-colon-space-after'          : 'always',
    'media-feature-colon-space-before'         : 'never',
    'media-feature-name-case'                  : 'lower',
    'media-feature-name-no-unknown'            : true,
    'media-feature-name-no-vendor-prefix'      : true,
    'media-feature-parentheses-space-inside'   : 'never',
    'media-feature-range-operator-space-after' : 'always',
    'media-feature-range-operator-space-before': 'always',

    'media-query-list-comma-newline-after' : 'always-multi-line',
    'media-query-list-comma-newline-before': 'never-multi-line',
    'media-query-list-comma-space-after'   : 'always',
    'media-query-list-comma-space-before'  : 'never',

    'at-rule-name-case'              : 'lower',
    'at-rule-name-newline-after'     : 'always-multi-line',
    'at-rule-name-space-after'       : 'always',
    'at-rule-no-vendor-prefix'       : true,
    'at-rule-semicolon-newline-after': 'always',

    'comment-empty-line-before': ['always', {
      except: ['first-nested']
    }],
    'comment-no-empty': true,

    'indentation'                     : 2,
    'max-empty-lines'                 : 1,
    'no-descending-specificity'       : true,
    'no-duplicate-selectors'          : true,
    'no-empty-source'                 : true,
    'no-eol-whitespace'               : true,
    'no-extra-semicolons'             : true,
    'no-invalid-double-slash-comments': true,
    'no-missing-end-of-source-newline': true,
    'no-unknown-animations'           : true
  }
};
