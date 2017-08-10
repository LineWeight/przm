const HtmlWebpackPlugin = require('html-webpack-plugin') //installed via npm
const webpack = require('webpack') //to access built-in plugins
const path = require('path')

module.exports = {
	entry: './src/index.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'build')
	},

	module: {
		rules: [{
			test: /\.css$/,
			use: ['style-loader', 'css-loader']
		}, {
			test: /\.(html)$/,
			use: {
				loader: 'raw-loader',
				options: {
					attrs: [':data-src']
				}
			}
		},
		{
			test: /\.js$/,
			exclude: /(node_modules|bower_components)/,
			use: {
				loader: 'babel-loader',
				options: {
					presets: ['env']
				}
			}
		}, {
			test: /\.vue$/,
			loader: 'vue-loader',
			options: {
				loaders: {}
				// other vue-loader options go here
			}
		},

		]
	},
	devtool: 'inline-source-map',
	devServer: {
		contentBase: './build'
	},
	plugins: [
		// new webpack.optimize.UglifyJsPlugin(),
		new HtmlWebpackPlugin({
			template: './index.html',
			filename: 'index.html',
			inject: false
		})
	]

}
