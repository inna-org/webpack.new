// redux-edge - project structure
// survivejs - webpack config

const path = require('path');
const PATHS = {
  app: path.join(__dirname, 'app'),
  build: path.join(__dirname, 'build'),
}

module.exports = {
  entry: {
    app: PATHS.app, // Will find index.js per convention
  },
  output: {
    path: PATHS.build,
    filename: '[name].js',
  },
  resolve: {
    extensions: ['.js', '.jsx' ],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: PATHS.app,
        loader: 'babel-loader',
        options: {
          cacheDirectory: true,
        },
      },
    ],
  },
}
