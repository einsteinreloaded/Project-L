const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: './src/client.js',
  output: {
    // build files into a real folder
    path: path.resolve('dist'),
    filename: 'bundle.js',
    // so the build files (in memory) are served from here -> localhost:8080/dist/*
    publicPath: '/dist/',
  },
  module: {
    loaders: [
      // loads your js OR jsx
      { test: /\.jsx?$/, loader: 'babel-loader', exclude: /node_modules/ },
      // load scss files
      {
        test: /\.scss$/,
        loaders: [
          'style-loader',
          // builds css modules' classnames from the path of the component in the tree.
          // eg: "src-components-Header-styles-header"
          // so it would be easy for debugging (we can minifiy these classnames in prod mode)
          'css-loader?importLoaders=2&module&localIdentName=[path][name]-[local]&-autoprefixer&-minimize',
          'sass-loader',
        ],
      },
    ]
  },
  resolve: {
    modules: [
      // so you can simple import your components as:
      // - import Header from 'components/Header' OR
      // - import App from 'containers/App'
      // any files under src/ folder can be imported as above anwhere under /src (no matter how deep you're).
      // absolute paths FTW!
      'src',
      'node_modules',
    ],
  }
};
