

module.exports = {
  entry: ['./entry.js'],
  output: {
    filename: "out.js",
    libraryTarget: "umd",
    library: "pack1",
  },

  // Causes the webpack modules 2 and 4 to resolve to the same '__WEBPACK_EXTERNAL_MODULE_2__'
  // externals: ['domready']
}
