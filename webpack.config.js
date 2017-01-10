"use strict";
var webpack = require('webpack');
var path = require('path');
var loaders = require('./webpack.loaders');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var DashboardPlugin = require('webpack-dashboard/plugin');

const HOST = process.env.HOST || "127.0.0.1";
const PORT = process.env.PORT || "8888";

loaders.push({
	test: /\.css$/,
	exclude: /[\/\\]src[\/\\]/,
	loaders: [
		'style?sourceMap',
		'css'
	]
});

// loaders.push({
// 	test: /\.css$/,
// 	exclude: /[\/\\](node_modules|bower_components|public)[\/\\]/,
// 	loaders: [
// 		'style?sourceMap',
// 		'css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]'
// 	]
// });

// loaders.push({
// 	test: /\.woff2{0,1}$/,
// 	loader: 'url-loader?limit=10000&mimetype=application/font-woff'
// });

// loaders.push({
// 	test: /\.(otf|eot|png|svg|ttf|woff|woff2|gif)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
// 	loader: 'file-loader'
// });

loaders.push({
    test: /\.(gif|jpg|png|woff|woff2|svg|eot|ttf)\??.*$/,
    loader: 'url-loader?limit=8192&name=[path][name].[ext]'
});

loaders.push({
  test: /\.scss$/,
  loaders : [
    'style-loader',
    'css-loader?sourceMap',
    'sass-loader?sourceMap'
  ]
});


module.exports = {
	entry: [
		'react-hot-loader/patch',
		'./src/index.jsx' // your app's entry point
	],
	devtool: process.env.WEBPACK_DEVTOOL || 'eval-source-map',
	output: {
		publicPath: '/',
		path: path.join(__dirname, 'public'),
		filename: 'bundle.js'
	},
	resolve: {
		extensions: ['', '.js', '.jsx']
	},
	module: {
		loaders
	},
	devServer: {
		contentBase: "./public",
		// do not print bundle build stats
		noInfo: true,
		// enable HMR
		hot: true,
		// embed the webpack-dev-server runtime into the bundle
		inline: true,
		// serve index.html in place of 404 responses to allow HTML5 history
		historyApiFallback: true,
		port: PORT,
		host: HOST
	},
	plugins: [
		new webpack.NoErrorsPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new DashboardPlugin(),
		new HtmlWebpackPlugin({
			template: './src/template.html'
		}),
	]
};
