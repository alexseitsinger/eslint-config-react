module.exports = {
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
    "./lib/general",
    "./lib/jsx",
  ].map(require.resolve)
}
