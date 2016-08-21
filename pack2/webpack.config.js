

module.exports = {
  entry: ['./entry.js'],
  output: {
    filename: "out.js",
    libraryTarget: "umd",
    library: "pack2",
  },

  externals: ['domready']
}
