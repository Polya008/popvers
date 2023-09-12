const { merge } = require('webpack-merge');
const TerserPlugin = require('terser-webpack-plugin');
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'production',
  stats: {
    children: true,
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({}),
      new CssMinimizerWebpackPlugin({}),
    ],
  },
});
