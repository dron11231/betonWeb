import path from 'path';

import CircularDependencyPlugin from 'circular-dependency-plugin';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';

const isMSWActive = process.env.MSW_ACTIVE === 'true';

export default {
  entry: './src/index.tsx',
  output: {
    path: path.resolve(process.cwd(), 'dist'),
    filename: 'bundle.[contenthash].js',
    clean: true,
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    modules: ['src', 'node_modules'],
    alias: {
      src: path.resolve(process.cwd(), 'src'),
    },
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(eot|ttf|woff|woff(2)?)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'assets/fonts/[name].[ext]?[hash]',
            },
          },
        ],
      },
      {
        test: /\.(svg)$/i,
        resourceQuery: { not: [/svgr/] },
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'svg/[name].[contenthash:7].[ext]',
            },
          },
        ],
      },
      {
        test: /\.svg$/i,
        issuer: /\.tsx?$/,
        resourceQuery: /svgr/,
        use: [
          {
            loader: '@svgr/webpack',
            options: {
              typescript: true,
              SVGO: true,
              ref: true,
            },
          },
        ],
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.scss$/i,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2,
              sourceMap: true,
              esModule: false,
              url: true,
              modules: {
                mode: 'local',
                localIdentName: `[path][name]--[local]`,
                localIdentContext: path.resolve(process.cwd(), 'src'),
              },
            },
          },
          'postcss-loader',
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new ForkTsCheckerWebpackPlugin({
      typescript: {
        diagnosticOptions: {
          syntactic: true,
          semantic: true,
        },
      },
    }),
    new webpack.DefinePlugin({
      process: { env: {} },
      MSW_ACTIVE: JSON.stringify(isMSWActive),
    }),
    new CircularDependencyPlugin({
      exclude: /node_modules/,
      include: /src/,
      failOnError: true,
      cwd: process.cwd(),
    }),
  ],
  devServer: {
    port: 3000,
    hot: true,
    open: true,
    historyApiFallback: true,
  },
};
