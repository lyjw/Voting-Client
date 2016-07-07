var webpack = require('webpack');

module.exports = {
  entry: [
    // Enables support for hot module replacement
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './src/index.jsx'
  ],
  // Find .jsx/.js files and process with Babel
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      // Configure react-hot loader to be used with js/jsx files
      loader: 'react-hot!babel'
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './dist',
    hot: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};
