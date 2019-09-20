/**
 * Eslint config for React.
 *
 * @example
 * module.exports = {
 *   root: true,
 *   extends: [
 *     "@alexseitsinger/eslint-config-base",
 *     "@alexseitsinger/eslint-config-react",
 *   ],
 * }
 */
module.exports = {
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: [
    "react",
  ],
  settings: {
    linkComponents: [
      {name: "Link", linkAttribute: "to"},
      {name: "Anchor", linkAttribute: "href"},
    ],
  },
  extends: [
    "./rules/general",
    "./rules/jsx",
  ].map(require.resolve)
}
