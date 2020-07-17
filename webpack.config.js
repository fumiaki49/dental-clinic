module.exports = {
  mode: "production",
  watch: true,
  entry: "./src/js/link.js",
  output: {
    path: `${__dirname}/dist/js`,
    filename: "bundle_link.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-env',
              ]
            }
          }
        ]
      }
    ]
  }
};