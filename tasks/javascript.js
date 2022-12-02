const browserSync = require('browser-sync');
const { dest, src } = require('gulp');
const webpackStream = require('webpack-stream');
const { paths } = require('./paths.js');

exports.javascript = javascript = () =>
	src(`${paths.srcFolder}/js/index.js`, { sourcemaps: true })
		.pipe(
			webpackStream({
				mode: 'development',
				output: {
					filename: 'main.min.js',
				},
				module: {
					rules: [
						{
							test: /\.[j]sx?$/, // сопоставляет файлы .js, .ts, и .tsx
							use: ['babel-loader'], // использует для указанных типов файлов загрузчик babel-loader (ts-loader не требуется).
							exclude: /node_modules/,
							type: 'javascript/auto',
						},
					],
				},
			})
		)

		.pipe(dest(`${paths.buildFolder}/js`))
		.pipe(browserSync.stream());
