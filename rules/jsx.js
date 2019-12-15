module.exports = {
  rules: {
    /**
     * Enforce boolean attributes notation in JSX. (fixable)
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-boolean-value.md
     *
     * @example
     * "off"
     */
    "react/jsx-boolean-value": "off",

    /**
     * Enforce or disallow spaces inside of curly braces in JSX attributes and expressions.
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-child-element-spacing.md
     *
     * @example
     * "off"
     */
    "react/jsx-child-element-spacing": "off",

    /**
     * Validate closing bracket location in JSX. (fixable)
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-closing-bracket-location.md
     *
     * @example
     * ["error", {
     *  nonEmpty: "after-props",
     *  selfClosing: "tag-aligned",
     * }]
     */
    "react/jsx-closing-bracket-location": ["error", {
      nonEmpty: "after-props",
      selfClosing: "tag-aligned",
    }],

    /**
     * Validate closing tag location in JSX. (fixable)
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-closing-tag-location.md
     *
     * @example
     * "error"
     */
    "react/jsx-closing-tag-location": "error",

    /**
     * Enforce or disallow spaces inside of curly braces in JSX attributes and expressions. (fixable)
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-curly-spacing.md
     *
     * @example
     * ["error", {
     *  when: "never",
     *  allowMultiline: true,
     * }]
     */
    "react/jsx-curly-spacing": ["error", { // might want to change this
      when: "never",
      allowMultiline: true,
    }],

    /**
     * Enforce or disallow spaces around equal signs in JSX attributes. (fixable)
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-equals-spacing.md
     *
     * @example
     * ["error", "never"]
     */
    "react/jsx-equals-spacing": ["error", "never"],

    /**
     * Restrict file extensions that may contain JSX.
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md
     *
     * @example
     * ["warn", {
     *  extensions: [".js", ".jsx"],
     * }]
     */
    "react/jsx-filename-extension": ["error", {
      extensions: [".js", ".jsx"]
    }],

    /**
     * Enforce position of the first prop in JSX. (fixable)
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-first-prop-new-line.md
     *
     * @example
     * ["error", "multiline"]
     */
    "react/jsx-first-prop-new-line": ["error", "multiline"],

    /**
     * Enforce event handler naming conventions in JSX.
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-handler-names.md
     *
     * @example
     * ["error", {
     *  eventHandlerPrefix: "handle",
     *  eventHandlerPropPrefix: "on",
     * }]
     */
    "react/jsx-handler-names": ["error", {
      eventHandlerPrefix: "handle",
      eventHandlerPropPrefix: "on",
    }],

    /**
     * Validate JSX indentation. (fixable)
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-indent.md
     *
     * @example
     * ["error", 2, {
     *  checkAttributes: true,
     *  indentLogicalExpressions: true,
     * }]
     */
    "react/jsx-indent": ["error", 2, {
      checkAttributes: true,
      indentLogicalExpressions: true,
    }],

    /**
     * Validate props indentation in JSX. (fixable)
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-indent-props.md
     *
     * @example
     * ["error", "first"]
     */
    "react/jsx-indent-props": ["error", "first"],

    /**
     * Validate JSX has key prop when in array or iterator.
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-key.md
     *
     * @example
     * "error"
     */
    "react/jsx-key": "error",

    /**
     * Validate JSX maximum depth.
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-max-depth.md
     *
     * @example
     * ["error", {
     *  max: 10,
     * }]
     */
    "react/jsx-max-depth": ["error", {
      max: 10,
    }],

    /**
     * Limit maximum of props on a single line in JSX. (fixable)
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-max-props-per-line.md
     *
     * @example
     * ["error", {
     *  when: "multiline",
     * }]
     */
    "react/jsx-max-props-per-line": ["error", {
      //maxmimum: 1,
      when: "multiline"
    }],

    /**
     * Prevent usage of .bind() and arrow functions in JSX props.
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md
     *
     * @example
     * ["error", {
     *  ignoreDOMComponents: false,
     *  ignoreRefs: false,
     *  allowArrowFunctions: true,
     *  allowFunctions: false,
     *  allowBind: false,
     * }]
     */
    "react/jsx-no-bind": ["error", {
      ignoreDOMComponents: false,
      ignoreRefs: false,
      allowArrowFunctions: true,
      allowFunctions: false,
      allowBind: false,
    }],

    /**
     * Prevent comments from being inserted as text nodes.
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-comment-textnodes.md
     *
     * @example
     * "error"
     */
    "react/jsx-no-comment-textnodes": "error",

    /**
     * Prevent duplicate props in JSX.
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-duplicate-props.md
     *
     * @example
     * ["error", {
     *  ignoreCase: true,
     * }]
     */
    "react/jsx-no-duplicate-props": ["error", {
      ignoreCase: true,
    }],

    /**
     * Prevent usage of unwrapped JSX strings.
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-literals.md
     *
     * @example
     * ["off", {
     *  noStrings: false,
     * }]
     */
    "react/jsx-no-literals": ["off", {
      noStrings: false,
    }],

    /**
     * Prevent usage of unsafe target='_blank'.
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-target-blank.md
     *
     * @example
     * ["error", {
     *  enforceDynamicLinks: "always",
     * }]
     */
    "react/jsx-no-target-blank": ["error", {
      enforceDynamicLinks: "always",
    }],

    /**
     * Disallow undeclared variables in JSX.
     *
     * NOTES:
     * - We might want this be true.
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-undef.md
     *
     * @example
     * ["error", {
     *  allowGlobals: false
     * }]
     */
    "react/jsx-no-undef": ["error", {
      allowGlobals: false,
    }],

    /**
     * Limit to one expression per line in JSX.
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-one-expression-per-line.md
     *
     * @example
     * ["error", {
     *  allow: "single-child",
     * }]
     */
    "react/jsx-one-expression-per-line": ["off", {
      allow: "single-child",
    }],

    /**
     * Enforce curly braces or disallow unnecessary curly braces in JSX.
     *
     * NOTES:
     * - We might want to change this for children.
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-curly-brace-presence.md
     *
     * @example
     * ["error", {
     *  props: "always",
     *  children: "never",
     * }]
     */
    "react/jsx-curly-brace-presence": ["error", {
      props: "always",
      children: "never",
    }],

    /**
     * Enforce shorthand or standard form for React fragments.
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-fragments.md
     *
     * @example
     * ["error", "element"]
     */
    "react/jsx-fragments": ["error", "element"],

    /**
     * Enforce PascalCase for user-defined JSX components.
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-pascal-case.md
     *
     * @example
     * ["error", {
     *  allowAllCaps: false,
     *  ignore: []
     * }]
     */
    "react/jsx-pascal-case": ["error", {
      allowAllCaps: false,
      ignore: [],
    }],

    /**
     * Disallow multiple spaces between inline JSX props. (fixable)
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-props-no-multi-spaces.md
     *
     * @example
     * "error"
     */
    "react/jsx-props-no-multi-spaces": "error",

    /**
     * Disallow JSX props spreading.
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-props-no-spreading.md
     *
     * @example
     * "off"
     */
    "react/jsx-props-no-spreading": "off",

    /**
     * Enforce default props alphabetical sorting.
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-sort-default-props.md
     *
     * @example
     * ["off", {
     *  ignoreCase: true,
     * }]
     */
    "react/jsx-sort-default-props": ["off", {
      ignoreCase: true,
    }],

    /**
     * Enforce props alphabetical sorting. (fixable)
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-sort-props.md
     *
     * @example
     * ["off", {
     *  callbacksLast: true,
     *  shorthandFirst: true,
     *  shorthandLast: false,
     *  ignoreCase: true,
     *  noSortAlphabetically: true,
     *  reservedFirst: true,
     * }]
     */
    "react/jsx-sort-props": ["off", {
      callbacksLast: true,
      shorthandFirst: true,
      shorthandLast: false,
      ignoreCase: true,
      noSortAlphabetically: true,
      reservedFirst: true,
    }],

    /**
     * Validate whitespace in and around the JSX opening and closing brackets.
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-tag-spacing.md
     *
     * @example
     * ["error", {
     *  closingSlash: "never",
     *  beforeSelfClosing: "always",
     *  afterOpening: "never",
     *  beforeClosing: "never",
     * }]
     */
    "react/jsx-tag-spacing": ["error", {
      closingSlash: "never",
      beforeSelfClosing: "always",
      afterOpening: "never",
      beforeClosing: "never",
    }],

    /**
     * Prevent React to be incorrectly marked as unused.
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-uses-react.md
     *
     * @example
     * "error"
     */
    "react/jsx-uses-react": "error",

    /**
     * Prevent variables used in JSX to be incorrectly marked as unused.
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-uses-vars.md
     *
     * @example
     * "error"
     */
    "react/jsx-uses-vars": "error",

    /**
     * Prevent missing parentheses around multilines JSX. (fixable)
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-wrap-multilines.md
     *
     * @example
     * ["error", {
     *  declaration: "parens-new-line",
     *  assignment: "parens-new-line",
     *  return: "parens-new-line",
     *  arrow: "parens-new-line",
     *  condition: "parens-new-line",
     *  logical: "parens-new-line",
     *  prop: "parens-new-line",
     * }]
     */
    "react/jsx-wrap-multilines": ["error", {
      declaration: "parens-new-line",
      assignment: "parens-new-line",
      return: "parens-new-line",
      arrow: "parens-new-line",
      condition: "parens-new-line",
      logical: "parens-new-line",
      prop: "parens-new-line",
    }],
  }
};
