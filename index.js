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
  extends: [
    "./rules/general",
    "./rules/jsx",
    "./rules/hooks",
  ].map(require.resolve)
}
