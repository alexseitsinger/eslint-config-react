module.exports = {
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: [
    "react",
    "react-hooks",
  ],
  settings: {
    linkComponents: [
      {name: "Link", linkAttribute: "to"},
      {name: "Anchor", linkAttribute: "href"},
    ],
  },
  rules: {
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",

    /**
     * Enforces consistent naming for boolean props.
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/boolean-prop-naming.md
     */
    "react/boolean-prop-naming": ["error", {
      propTypeNames: ["bool"],
      rule: "^(is|has)[A-Z]([A-Za-z0-9]?)+",
      //"message": "",
      //"validateNested": true,
    }],

    /**
     * Forbid "button" element without an explicit "type" attribute.
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/button-has-type.md
     */
    "react/button-has-type": ["error", {
      button: true,
      submit: true,
      reset: true,
    }],

    /**
     * Prevent extraneous defaultProps on components.
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/default-props-match-prop-types.md
     */
    "react/default-props-match-prop-types": ["error", {
      allowRequiredDefaults: false,
    }],

    /**
     * Enforces consistent usage of destructuring assignment in component.
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/destructuring-assignment.md
     */
    "react/destructuring-assignment": ["error", "always", {
      ignoreClassFields: true,
    }],

    /**
     * Prevent missing displayName in a React component definition.
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/display-name.md
     */
    "react/display-name": ["error", {
      ignoreTranspilerName: false,
    }],

    /**
     * Forbid certain props on Components.
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-component-props.md
     */
    "react/forbid-component-props": ["off", {
      forbid: ["className", "style"],
    }],

    /**
     * Forbid certain props on DOM Nodes.
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-dom-props.md
     */
    "react/forbid-dom-props": ["error", {
      forbid: [],
    }],

    /**
     * Forbid certain elements.
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-elements.md
     */
    "react/forbid-elements": ["error", {
      forbid: [],
    }],

    /**
     * Forbid certain propTypes.
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-prop-types.md
     */
    "react/forbid-prop-types": ["error", {
      forbid: ["any", "array"],
      checkContextTypes: false,
      checkChildContextTypes: false,
    }],

    /**
     * Forbid foreign propTypes.
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-foreign-prop-types.md
     */
    "react/forbid-foreign-prop-types": "error",

    /**
     * Prevent using this.state inside this.setState.
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-access-state-in-setstate.md
     */
    "react/no-access-state-in-setstate": "error",

    /**
     * Prevent using Array index in key props.
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-array-index-key.md
     */
    "react/no-array-index-key": "error",

    /**
     * Prevent passing children as props.
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-children-prop.md
     */
    "react/no-children-prop": "error",

    /**
     * Prevent usage of dangerous JSX properties.
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-danger.md
     */
    "react/no-danger": "error",

    /**
     * Prevent problem with children and props.dangerouslySetInnerHTML.
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-danger-with-children.md
     */
    "react/no-danger-with-children": "error",

    /**
     * Prevent usage of deprecated methods, including component lifecyle
     * methods.
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-deprecated.md
     */
    "react/no-deprecated": "error",

    /**
     * Prevent usage of setState in componentDidMount.
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-did-mount-set-state.md
     */
    "react/no-did-mount-set-state": ["error", "disallow-in-func"],

    /**
     * Prevent usage of setState in componentDidUpdate.
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-did-update-set-state.md
     */
    "react/no-did-update-set-state": ["error", "disallow-in-func"],

    /**
     * Prevent direct mutation of this.state.
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-direct-mutation-state.md
     */
    "react/no-direct-mutation-state": "error",

    /**
     * Prevent usage of findDOMNode.
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-find-dom-node.md
     */
    "react/no-find-dom-node": "error",

    /**
     * Prevent usage of isMounted.
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-is-mounted.md
     */
    "react/no-is-mounted": "error",

    /**
     * Prevent multiple component definition per file.
     *
     * NOTES:
     * - In tets, we often have multuple components declared in one file. As a
     *   result, it might be better to disable this rule. For now, we will
     *   throw an error if there are more than one Class components in a file.
     *   If we have multiple stateless functions, it will ignore them.
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-multi-comp.md
     */
    "react/no-multi-comp": ["error", {
      ignoreStateless: true,
    }],

    /**
     * Prevent usage of shouldComponentUpdate when extending
     * React.PureComponent.
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-redundant-should-component-update.md
     */
    "react/no-redundant-should-component-update": "error",

    /**
     * Prevent usage of the return value of React.render.
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-render-return-value.md
     */
    "react/no-render-return-value": "error",

    /**
     * Prevent usage of setState.
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-set-state.md
     */
    "react/no-set-state": "off",

    /**
     * Prevent common casing typos.
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-typos.md
     */
    "react/no-typos": "error",

    /**
     * Prevent using string references in ref attribute.
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-string-refs.md
     */
    "react/no-string-refs": ["error", {
      noTemplateLiterals: true,
    }],

    /**
     * Prevent using this in stateless functional components.
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-this-in-sfc.md
     */
    "react/no-this-in-sfc": "error",

    /**
     * Prevent invalid characters from appearing in markup.
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unescaped-entities.md
     */
    "react/no-unescaped-entities": ["error", {
      forbid: [">", '"', "\'", "}"],
    }],

    /**
     * Prevent usage of unknown DOM property. (fixable)
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unknown-property.md
     */
    "react/no-unknown-property": ["error", {
      ignore: [],
    }],

    /**
     * Prevent usage of unsafe lifecycle methods
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unsafe.md
     */
    "react/no-unsafe": ["error", {
      checkAliases: true,
    }],

    /**
     * Prevent definitions of unused prop types.
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unused-prop-types.md
     */
    "react/no-unused-prop-types": ["error", {
      customValidators: [],
      skipShapeProps: true,
    }],

    /**
     * Prevent definitions of unused state properties.
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unused-state.md
     */
    "react/no-unused-state": "error",

    /**
     * Prevent usage of setState in componentWillUpdate.
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-will-update-set-state.md
     */
    "react/no-will-update-set-state": ["error", "disallow-in-func"],

    /**
     * Enforce ES5 or ES6 class for React Components.
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-es6-class.md
     */
    "react/prefer-es6-class": ["error", "always"],

    /**
     * Enforce that props are read-only.
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-read-only-props.md
     */
    "react/prefer-read-only-props": "error",

    /**
     * Enforce stateless React Components to be written as a pure function.
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-stateless-function.md
     */
    "react/prefer-stateless-function": ["error", {
      ignorePureComponents: true,
    }],

    /**
     * Prevent missing props validation in a React component definition.
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prop-types.md
     *
     * @example
     * ["error", {
     *  ignore: [],
     *  customValidators: [],
     *  skipUndeclared: true,
     * }]
     */
    "react/prop-types": ["error", {
      ignore: [],
      customValidators: [],
      skipUndeclared: true,
    }],

    /**
     * Prevent missing React when using JSX.
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/react-in-jsx-scope.md
     *
     * @example
     * "error"
     */
    "react/react-in-jsx-scope": "error",

    /**
     * Enforce a defaultProps definition for every prop that is not a required
     * prop.
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/require-default-props.md
     *
     * @example
     * ["error", {
     *  forbidDefaultForRequired: true,
     * }]
     */
    "react/require-default-props": ["error", {
      forbidDefaultForRequired: true,
    }],

    /**
     * Enforce React components to have a shouldComponentUpdate method.
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/require-optimization.md
     *
     * @example
     * "off"
     */
    "react/require-optimization": "off",

    /**
     * Enforce ES5 or ES6 class for returning value in render function.
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/require-render-return.md
     *
     * @example
     * "error"
     */
    "react/require-render-return": "error",

    /**
     * Prevent extra closing tags for components without children. (fixable)
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/self-closing-comp.md
     *
     * @example
     * ["error", {
     *  component: true,
     *  html: true,
     * }]
     */
    "react/self-closing-comp": ["error", {
      component: true,
      html: true,
    }],

    /**
     * Enforce component methods order.
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/sort-comp.md
     *
     * @example
     * ["error", {
     *   order: [
     *     "static-methods",
     *     "instance-variables",
     *     "lifecycle",
     *     "/^on.+$/",
     *     "getters",
     *     "setters",
     *     "/^(get|set)(?!(InitialState$|DefaultProps$|ChildContext$)).+$/",
     *     "instance-methods",
     *     "everything-else",
     *     "rendering",
     *   ],
     *   groups: {
     *     "lifecycle": [
     *       'displayName',
     *       'propTypes',
     *       'contextTypes',
     *       'childContextTypes',
     *       'mixins',
     *       'statics',
     *       'defaultProps',
     *       'constructor',
     *       'getDefaultProps',
     *       'getInitialState',
     *       'state',
     *       'getChildContext',
     *       'getDerivedStateFromProps',
     *       'componentWillMount',
     *       'UNSAFE_componentWillMount',
     *       'componentDidMount',
     *       'componentWillReceiveProps',
     *       'UNSAFE_componentWillReceiveProps',
     *       'shouldComponentUpdate',
     *       'componentWillUpdate',
     *       'UNSAFE_componentWillUpdate',
     *       'getSnapshotBeforeUpdate',
     *       'componentDidUpdate',
     *       'componentDidCatch',
     *       'componentWillUnmount'
     *     ],
     *     rendering: [
     *       "/^render.+$/",
     *       "render"
     *     ]
     *   }
     * }]
     */
    "react/sort-comp": ["error", {
      order: [
        "static-variables",
        "lifecycle-variables",
        "lifecycle-methods",
        "static-methods",
        "event-methods",
        "instance-variables",
        "instance-methods",
        "everything-else",
        "rendering",
      ],
      groups: {
        "event-methods": [
          "/^handle.+$/",
          "/^on.+$/",
        ],
        "lifecycle-variables": [
          'displayName',
          'propTypes',
          'contextTypes',
          'childContextTypes',
          'mixins',
          'statics',
          'defaultProps',
          'state',
        ],
        "lifecycle-methods": [
          'constructor',
          'getDefaultProps',
          'getInitialState',
          'getChildContext',
          'getDerivedStateFromProps',
          'componentWillMount',
          'UNSAFE_componentWillMount',
          'componentDidMount',
          'componentWillReceiveProps',
          'UNSAFE_componentWillReceiveProps',
          'shouldComponentUpdate',
          'componentWillUpdate',
          'UNSAFE_componentWillUpdate',
          'getSnapshotBeforeUpdate',
          'componentDidUpdate',
          'componentDidCatch',
          'componentWillUnmount'
        ],
        rendering: [
          "/^render.+$/",
          "render"
        ]
      }
    }],

    /**
     * Enforce propTypes declarations alphabetical sorting.
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/sort-prop-types.md
     *
     * @example
     * ["off", {
     *  callbacksLast: true,
     *  ignoreCase: false,
     *  requiredFirst: true,
     *  sortShapeProp: true,
     *  noSortAlphabetically: false,
     * }]
     */
    "react/sort-prop-types": ["off", {
      callbacksLast: true,
      ignoreCase: false,
      requiredFirst: true,
      sortShapeProp: true,
      noSortAlphabetically: false,
    }],

    /**
     * Enforce the state initialization style to be either in a constructor or
     * with a class property.
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/state-in-constructor.md
     *
     * @example
     * ["error", "never"]
     */
    "react/state-in-constructor": ["error", "never"],

    /**
     * Enforces where React component static properties should be positioned.
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/static-property-placement.md
     *
     * @example
     * ["error", "static public field"]
     */
    "react/static-property-placement": ["error", "static public field"],

    /**
     * Enforce style prop value being an object.
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/style-prop-object.md
     *
     * @example
     * "error"
     */
    "react/style-prop-object": "error",

    /**
     * Prevent void DOM elements (e.g. <img />, <br />) from receiving children.
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/void-dom-elements-no-children.md
     *
     * @example
     * "error"
     */
    "react/void-dom-elements-no-children": "error",


    /**
     * Enforce boolean attributes notation in JSX. (fixable)
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-boolean-value.md
     */
    "react/jsx-boolean-value": "off",

    /**
     * Enforce or disallow spaces inside of curly braces in JSX attributes and expressions.
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-child-element-spacing.md
     */
    "react/jsx-child-element-spacing": "off",

    /**
     * Validate closing bracket location in JSX. (fixable)
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-closing-bracket-location.md
     */
    "react/jsx-closing-bracket-location": ["error", {
      nonEmpty: "after-props",
      selfClosing: "tag-aligned",
    }],

    /**
     * Validate closing tag location in JSX. (fixable)
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-closing-tag-location.md
     */
    "react/jsx-closing-tag-location": "error",

    /**
     * Enforce or disallow spaces inside of curly braces in JSX attributes and expressions. (fixable)
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-curly-spacing.md
     */
    "react/jsx-curly-spacing": ["error", { // might want to change this
      when: "never",
      allowMultiline: true,
    }],

    /**
     * Enforce or disallow spaces around equal signs in JSX attributes. (fixable)
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-equals-spacing.md
     */
    "react/jsx-equals-spacing": ["error", "never"],

    /**
     * Restrict file extensions that may contain JSX.
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md
     */
    "react/jsx-filename-extension": ["error", {
      extensions: [".js", ".jsx"]
    }],

    /**
     * Enforce position of the first prop in JSX. (fixable)
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-first-prop-new-line.md
     */
    "react/jsx-first-prop-new-line": ["error", "multiline"],

    /**
     * Enforce event handler naming conventions in JSX.
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-handler-names.md
     */
    "react/jsx-handler-names": ["error", {
      eventHandlerPrefix: "handle",
      eventHandlerPropPrefix: "on",
    }],

    /**
     * Validate JSX indentation. (fixable)
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-indent.md
     */
    "react/jsx-indent": ["error", 2, {
      checkAttributes: true,
      indentLogicalExpressions: true,
    }],

    /**
     * Validate props indentation in JSX. (fixable)
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-indent-props.md
     */
    "react/jsx-indent-props": ["error", "first"],

    /**
     * Validate JSX has key prop when in array or iterator.
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-key.md
     */
    "react/jsx-key": "error",

    /**
     * Validate JSX maximum depth.
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-max-depth.md
     */
    "react/jsx-max-depth": ["error", {
      max: 10,
    }],

    /**
     * Limit maximum of props on a single line in JSX. (fixable)
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-max-props-per-line.md
     */
    "react/jsx-max-props-per-line": ["error", {
      //maxmimum: 1,
      when: "multiline"
    }],

    /**
     * Prevent usage of .bind() and arrow functions in JSX props.
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md
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
     */
    "react/jsx-no-comment-textnodes": "error",

    /**
     * Prevent duplicate props in JSX.
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-duplicate-props.md
     */
    "react/jsx-no-duplicate-props": ["error", {
      ignoreCase: true,
    }],

    /**
     * Prevent usage of unwrapped JSX strings.
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-literals.md
     */
    "react/jsx-no-literals": ["off", {
      noStrings: false,
    }],

    /**
     * Prevent usage of unsafe target='_blank'.
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-target-blank.md
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
     */
    "react/jsx-no-undef": ["error", {
      allowGlobals: false,
    }],

    /**
     * Limit to one expression per line in JSX.
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-one-expression-per-line.md
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
     */
    "react/jsx-curly-brace-presence": ["error", {
      props: "always",
      children: "never",
    }],

    /**
     * Enforce shorthand or standard form for React fragments.
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-fragments.md
     */
    "react/jsx-fragments": ["error", "element"],

    /**
     * Enforce PascalCase for user-defined JSX components.
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-pascal-case.md
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
}
