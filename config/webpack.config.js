const webpack=require('webpack');
const path = require('path');
module.exports = {
  entry: './src/app/app.jsx',
  output: {
    path: path.resolve('dist'),
    filename: 'bundle.js'
  },
  plugins: [
  new webpack.ProvidePlugin({
    "React": "react",
  }),
],
externals: {
    'react': 'React'
},
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ }
    ]
  }
}