const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'production',
  entry: {
    index: './src/index.ts'
  },
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'es'),
    library: {
      type: 'module'
    }
  },
  experiments: {
    outputModule: true
  },
  devtool: false,
  resolve: {
    extensions: ['.js', '.ts']
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: ['ts-loader']
      }
    ]
  },
  plugins: [
    new webpack.CleanPlugin()
  ]
}