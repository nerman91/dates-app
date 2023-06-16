const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FileManagerPlugin = require('filemanager-webpack-plugin');

const NODE_ENV = process.env.NODE_ENV;
const IS_DEV = NODE_ENV === 'development';
const IS_PROD = NODE_ENV === 'production';

function setupDevtool() {
  if (IS_DEV) {
    return 'eval';
  }

  if (IS_PROD) {
    return false;
  }
}

module.exports = {
  entry: path.join(__dirname, 'src', 'index.jsx'),
  resolve: { extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'] },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.[contenthash].js'
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src', 'index.html')
    }),

    new FileManagerPlugin({
      events: {
        onStart: {
          delete: ['dist']
        }
      }
    })
  ],

  module: {
    rules: [
      {
        test: /\.[tj]sx?$/,
        exclude: /node_modules/,
        use: ['ts-loader']
      },

      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                mode: 'local',
                localIdentName: '[name]__[local]--[hash:base64:5]'
              }
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      }
    ]
  },

  devServer: {
    port: 8000,
    open: true,
    compress: true,
    hot: IS_DEV
  },

  devtool: setupDevtool()
};
