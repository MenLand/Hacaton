const browserSync = require('browser-sync');
const { dest, src } = require('gulp');
const webpack = require('webpack');
const webpackStream = require('webpack-stream');
const { isProd } = require('./isProd.js');
const { paths } = require('./paths.js');

exports.javascript = javascript = () =>
	src(`${paths.srcFolder}/js/index.js`)
		.pipe(
			webpackStream(
				{
					mode: isProd() ? 'production' : 'development',
					output: {
						filename: 'main.min.js',
					},
					devtool: !isProd() ? 'source-map' : false,
					module: {
						rules: [
							{
								test: /\.m?js$/,
								exclude: /node_modules/,
								use: {
									loader: 'babel-loader',
								},
							},
						],
					},
				},
				webpack
			)
		)
		.pipe(dest(`${paths.buildFolder}/js`))
		.pipe(browserSync.reload({ stream: true }));
