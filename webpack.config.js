var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

process.env.UV_THREADPOOL_SIZE = 100;

module.exports = {
  context: path.join(__dirname),
  entry: {
    app: ['webpack/hot/dev-server', './example/app.js']
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
    publicPath: '/assets/'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loaders: ['babel?optional[]=runtime&cacheDirectory']
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style', 'css!sass')
      },
      {
        test: /\.json$/,
        loader: "json-loader"
      }
    ]
  },
  resolve: {
    modulesDirectories: ['node_modules', 'src/components'],
    alias: {
      react: path.resolve('./node_modules/react')
    }
  },
  plugins: [
    new ExtractTextPlugin('[name].css')
  ]
};
