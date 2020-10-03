const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const LOCAL = 'local';

module.exports = (env) => {
  return {
    mode: 'none',
    entry: {
      index: path.join(__dirname, 'src', 'index.tsx'),
    },
    devtool: 'inline-source-map',
    target: 'web',
    resolve: {
      extensions: ['.ts', '.tsx', '.js'],
      alias: {
        '@pages': path.resolve(__dirname, 'src/pages/'),
        '@components': path.resolve(__dirname, 'src/components/'),
        '@utils': path.resolve(__dirname, 'src/utils/'),
      },
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: '/node_modules/',
        },
      ],
    },
    devServer: {
      historyApiFallback: true,
    },
    watchOptions: {
      poll: true,
    },
    output: {
      filename: env.NODE_ENV === LOCAL ? '[name].js' : '[name].[contenthash].js',
      path: path.resolve(__dirname, 'public'),
      publicPath: '/',
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.join(__dirname, 'src', 'index.html'),
      }),
      new Dotenv(),
    ],
  };
};
