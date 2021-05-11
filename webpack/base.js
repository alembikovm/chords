const HtmlWebpackPlugin = require('html-webpack-plugin');
const { resolve, isDevelopment } = require('./utils');

module.exports = {
	mode: process.env.NODE_ENV,
	entry: resolve('app'),
	output: {
		path: resolve('static', 'dist'),
		filename: '[name].[contenthash].js',
	},
	resolve: {
		extensions: ['.js', '.jsx'],
		mainFields: ['browser', 'module', 'main'],
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				options: {
					cacheDirectory: true,
					plugins: [
						[
							"babel-plugin-styled-components",
							{
								ssr: false,
								fileName: false,
								displayName: isDevelopment,
							},
						],
					],
				},
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: resolve('static', 'index.html')
		}),
	],
};
