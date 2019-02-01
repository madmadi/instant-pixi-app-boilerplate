const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  mode: isProd ? 'production' : 'development',
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif)$/,
        use: 'file-loader',
      },
    ],
  },
  resolve: {
    alias: {
      src: path.resolve(__dirname, 'src/'),
    },
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: 'src/index.html',
    }),
  ],
};
