module.exports = {
  rules: {
    /**
     * Enforces consistent naming for boolean props.
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/boolean-prop-naming.md
     *
     * @example
     * ["error", {
     *  propTypeNames: ["bool"],
     *  rule: "^(is|has)[A-Z([A-Za-z0-9]?)+",
     * }]
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
     *
     * @example
     * ["error", {
     *  button: true,
     *  submit: true,
     *  reset: true,
     * }]
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
     *
     * @example
     * ["error", {
     *  allowRequiredDefaults: false,
     * }]
     */
    "react/default-props-match-prop-types": ["error", {
      allowRequiredDefaults: false,
    }],

    /**
     * Enforces consistent usage of destructuring assignment in component.
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/destructuring-assignment.md
     *
     * @example
     * ["error", "always", {
     *  ignoreClassFields: true,
     * }]
     */
    "react/destructuring-assignment": ["error", "always", {
      ignoreClassFields: true,
    }],

    /**
     * Prevent missing displayName in a React component definition.
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/display-name.md
     *
     * @example
     * ["error", {
     *  ignoreTranspilerName: false,
     * }]
     */
    "react/display-name": ["error", {
      ignoreTranspilerName: false,
    }],

    /**
     * Forbid certain props on Components.
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-component-props.md
     *
     * @example
     * ["error", {
     *  forbid: ["className", "style"],
     * }]
     */
    "react/forbid-component-props": ["error", {
      forbid: ["className", "style"],
    }],

    /**
     * Forbid certain props on DOM Nodes.
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-dom-props.md
     *
     * @example
     * ["error", {
     *  forbid: [],
     * }]
     */
    "react/forbid-dom-props": ["error", {
      forbid: [],
    }],

    /**
     * Forbid certain elements.
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-elements.md
     *
     * @example
     * ["error", {
     *  forbid: [],
     * }]
     */
    "react/forbid-elements": ["error", {
      forbid: [],
    }],

    /**
     * Forbid certain propTypes.
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-prop-types.md
     *
     * @example
     * ["error", {
     *  forbid: ["any", "array"],
     *  checkContextTypes: false,
     *  checkChildContextTypes: false,
     * }]
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
     *
     * @example
     * "error"
     */
    "react/forbid-foreign-prop-types": "error",

    /**
     * Prevent using this.state inside this.setState.
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-access-state-in-setstate.md
     *
     * @example
     * "error"
     */
    "react/no-access-state-in-setstate": "error",

    /**
     * Prevent using Array index in key props.
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-array-index-key.md
     *
     * @example
     * "error"
     */
    "react/no-array-index-key": "error",

    /**
     * Prevent passing children as props.
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-children-prop.md
     *
     * @example
     * "error"
     */
    "react/no-children-prop": "error",

    /**
     * Prevent usage of dangerous JSX properties.
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-danger.md
     *
     * @example
     * "error"
     */
    "react/no-danger": "error",

    /**
     * Prevent problem with children and props.dangerouslySetInnerHTML.
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-danger-with-children.md
     *
     * @example
     * "error"
     */
    "react/no-danger-with-children": "error",

    /**
     * Prevent usage of deprecated methods, including component lifecyle
     * methods.
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-deprecated.md
     *
     * @example
     * "error"
     */
    "react/no-deprecated": "error",

    /**
     * Prevent usage of setState in componentDidMount.
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-did-mount-set-state.md
     *
     * @example
     * ["error", "disallow-in-func"]
     */
    "react/no-did-mount-set-state": ["error", "disallow-in-func"],

    /**
     * Prevent usage of setState in componentDidUpdate.
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-did-update-set-state.md
     *
     * @example
     * ["error", "disallow-in-func"]
     */
    "react/no-did-update-set-state": ["error", "disallow-in-func"],

    /**
     * Prevent direct mutation of this.state.
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-direct-mutation-state.md
     *
     * @example
     * "error"
     */
    "react/no-direct-mutation-state": "error",

    /**
     * Prevent usage of findDOMNode.
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-find-dom-node.md
     *
     * @example
     * "error"
     */
    "react/no-find-dom-node": "error",

    /**
     * Prevent usage of isMounted.
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-is-mounted.md
     *
     * @example
     * "error"
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
     *
     * @example
     * ["error", {
     *  ignoreStateless: true,
     * }]
     */
    "react/no-multi-comp": ["error", {
      ignoreStateless: true,
    }],

    /**
     * Prevent usage of shouldComponentUpdate when extending
     * React.PureComponent.
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-redundant-should-component-update.md
     *
     * @example
     * "error"
     */
    "react/no-redundant-should-component-update": "error",

    /**
     * Prevent usage of the return value of React.render.
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-render-return-value.md
     *
     * @example
     * "error"
     */
    "react/no-render-return-value": "error",

    /**
     * Prevent usage of setState.
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-set-state.md
     *
     * @example
     * "off"
     */
    "react/no-set-state": "off",

    /**
     * Prevent common casing typos.
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-typos.md
     *
     * @example
     * "error"
     */
    "react/no-typos": "error",

    /**
     * Prevent using string references in ref attribute.
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-string-refs.md
     *
     * @example
     * ["error", {
     *  noTemplateLiterals: true,
     * }]
     */
    "react/no-string-refs": ["error", {
      noTemplateLiterals: true,
    }],

    /**
     * Prevent using this in stateless functional components.
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-this-in-sfc.md
     *
     * @example
     * "error"
     */
    "react/no-this-in-sfc": "error",

    /**
     * Prevent invalid characters from appearing in markup.
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unescaped-entities.md
     *
     * @example
     * ["error", {
     *  forbid: [">", '"', "\'", "}"],
     * }]
     */
    "react/no-unescaped-entities": ["error", {
      forbid: [">", '"', "\'", "}"],
    }],

    /**
     * Prevent usage of unknown DOM property. (fixable)
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unknown-property.md
     *
     * @example
     * ["error", {
     *  ignore: [],
     * }]
     */
    "react/no-unknown-property": ["error", {
      ignore: [],
    }],

    /**
     * Prevent usage of unsafe lifecycle methods
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unsafe.md
     *
     * @example
     * ["error", {
     *  checkAliases: true,
     * }]
     */
    "react/no-unsafe": ["error", {
      checkAliases: true,
    }],

    /**
     * Prevent definitions of unused prop types.
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unused-prop-types.md
     *
     * @example
     * ["error", {
     *  customValidators: [],
     *  skipShapeProps: true,
     * }]
     */
    "react/no-unused-prop-types": ["error", {
      customValidators: [],
      skipShapeProps: true,
    }],

    /**
     * Prevent definitions of unused state properties.
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unused-state.md
     *
     * @example
     * "error"
     */
    "react/no-unused-state": "error",

    /**
     * Prevent usage of setState in componentWillUpdate.
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-will-update-set-state.md
     *
     * @example
     * ["error", "disallow-in-func"]
     */
    "react/no-will-update-set-state": ["error", "disallow-in-func"],

    /**
     * Enforce ES5 or ES6 class for React Components.
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-es6-class.md
     *
     * @example
     * ["error", "always"]
     */
    "react/prefer-es6-class": ["error", "always"],

    /**
     * Enforce that props are read-only.
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-read-only-props.md
     *
     * @example
     * "error"
     */
    "react/prefer-read-only-props": "error",

    /**
     * Enforce stateless React Components to be written as a pure function.
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-stateless-function.md
     *
     * @example
     * ["error", {
     *  ignorePureComponents: true,
     * }]
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
  }
}
