const path = require('path')
const Dotenv = require('dotenv-webpack')

module.exports = {
  entry: {
    js: ['babel-polyfill', './src/index.js'],
    vendor: ['react']
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[hash:8].js',
    sourceMapFilename: '[name].[hash:8].map',
    chunkFilename: '[id].[hash:8].js'
  },
  plugins: [
    new Dotenv()
  ],
  module: {
    rules: [
      {
        loader: 'babel-loader',
        test: /\.js$/,
        exclude: /node-modules/,
        options: {
          presets: [
            '@babel/preset-env',
            {
              plugins: [
                '@babel/plugin-proposal-class-properties'
              ]
            }
          ]
        }
      },
      {
        test: /\.(eot|woff|ttf|svg|png|jpg)$/,
        loader: 'file-loader'
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, '/public'),
    historyApiFallback: true,
    headers: { 'Access-Control-Allow-Origin': '*' }
  }
}
