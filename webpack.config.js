const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const webpack = require('webpack');

/** @type {(env: any, arg: {mode: string}) => import('webpack').Configuration} **/

module.exports = (env, argv) => {
  const isProduction = argv.mode === 'production';

  /** @type {import('webpack').Configuration} **/
  const config = {
    entry: path.resolve(__dirname, '', './src/index.tsx'),
    resolve: {
      extensions: ['.tsx', '.ts', '.js', '.jsx'],
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    mode: 'development',
    devtool: isProduction ? 'source-map' : 'cheap-module-source-map',
    devServer: {
      hot: true,
      open: true,
      port: 3000,
      historyApiFallback: true,
      static: {
        directory: path.resolve(__dirname, 'public', 'index.html'),
        serveIndex: true,
        watch: true,
      },
    },
    module: {
      rules: [
        {
          test: /\.(ts|js)x?$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'babel-loader',
            },
          ],
        },
        {
          test: /\.(sass|scss|css)$/,
          use: ['style-loader', 'css-loader', 'sass-loader'],
        },
        {
          test: /\.(svg|eot|woff|woff2|ttf|png|jpg|gif)$/,
          use: ['file-loader'],
        },
      ],
    },
    output: {
      path: path.resolve(__dirname, '', './build'),
      filename: 'static/js/bundle.[contenthash:6].js',
      publicPath: '/',
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: isProduction
          ? 'static/css/[name].[contenthash:6].css'
          : '[name].css',
      }),
      new CopyWebpackPlugin({
        patterns: [
          {
            from: 'public',
            to: '.',
            filter: (name) => {
              return !name.endsWith('index.html');
            },
          },
        ],
      }),
      new ReactRefreshWebpackPlugin(),
      new Dotenv(),
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'public', 'index.html'),
      }),
      new ESLintPlugin({
        extensions: ['.tsx', '.ts', '.js', '.jsx'],
      }),
    ],
  };

  if (isProduction) {
    config.plugins = [
      ...config.plugins,
      new webpack.ProgressPlugin(),
      new CleanWebpackPlugin(),
    ];
    config.optimization = {
      minimizer: [`...`, new CssMinimizerPlugin()],
    };
  }
  return config;
};
