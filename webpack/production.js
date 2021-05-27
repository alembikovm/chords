const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { merge } = require('webpack-merge');

module.exports = merge(require('./base'), {
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
					{ loader: MiniCssExtractPlugin.loader },
					{
						loader: 'css-loader',
						options: {
							sourceMap: false,
							modules: {
								// this line configure auto-generated classnames. See: [documentation](https://webpack.js.org/loaders/css-loader/#localidentname)
								localIdentName: `[hash:base64:10]`,
							},
						},
					},
				],
			},
		],
	},
	plugins: [
		new CleanWebpackPlugin(),
		new MiniCssExtractPlugin({
			filename: '[name].[contenthash].css'
		}),
		require('@fronton/postcss-plugin').plugin,
		require('autoprefixer'),
	],
	optimization: {
		minimizer: [
			'...',
			new CssMinimizerPlugin()
		],
	},
});
