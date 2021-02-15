const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, './Client/src/index.jsx'),
  mode: 'development',
  output: {
    path: path.resolve(__dirname, './Client/Dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.(scss)$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.scss'],
  },
};
