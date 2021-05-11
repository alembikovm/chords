const { merge } = require('webpack-merge');
const { resolve } = require('./utils');

module.exports = merge(require('./base'), {
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
					'style-loader',
					{
						loader: 'css-loader',
						options: {
							url: false,
							sourceMap: true,
							modules: {
								// this line configure auto-generated classnames. See: [documentation](https://webpack.js.org/loaders/css-loader/#localidentname)
								localIdentName: `[local]_[hash:base64:10]`,
							},
						}
					}
				]
			}
		]
	},
	devServer: {
		contentBase: resolve('static'),
		compress: true,
		open: true,
		stats: {
			modules: false
		},
		host: '127.0.0.1',
		port: 3000
	},
	devtool: 'inline-cheap-module-source-map'
});
