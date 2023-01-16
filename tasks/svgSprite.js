const { src, dest } = require('gulp');
const { paths } = require('./paths');
const svgMin = require('gulp-svgmin');
const gulpCheerio = require('gulp-cheerio');
const replace = require('gulp-replace');
const sprite = require('gulp-svg-sprite');
const size = require('gulp-size');
const gulpIf = require('gulp-if');
const { isProd } = require('./isProd');

// exports.svgSprite = svgSprite = () => {
// 	return (
// 		src(`${paths.srcFolder}/images/svg/**.svg`)
// 			.pipe(
// 				svgMin({
// 					js2svg: {
// 						pretty: true,
// 					},
// 				})
// 			)
// 			// .pipe(
// 			// 	gulpCheerio({
// 			// 		run: function ($) {
// 			// 			$('[fill]').removeAttr('fill');
// 			// 			$('[stroke]').removeAttr('stroke');
// 			// 			$('[style]').removeAttr('style');
// 			// 		},
// 			// 		parserOptions: {
// 			// 			xmlMode: true,
// 			// 		},
// 			// 	})
// 			// )
// 			.pipe(replace('&gt;', '>'))
// 			.pipe(
// 				sprite({
// 					mode: {
// 						stack: {
// 							sprite: '../sprite.svg',
// 						},
// 					},
// 				})
// 			)
// 			.pipe(dest(`${paths.buildFolder}/images`))
// 	);
// };

exports.svgSprite = svgSprite = () => {
	return src(`${paths.srcFolder}/images/svg/**.svg`)
		.pipe(
			sprite({
				shape: {
					transform: [
						{
							svgo: {
								plugins: [
									{
										removeAttrs: {
											attrs: ['fill', 'stroke', 'style'],
										},
									},
								],
							},
						},
					],
				},
				mode: {
					symbol: {
						sprite: '../sprite.svg',
					},
				},
			})
		)
		.pipe(dest(`${paths.buildFolder}/images`));
};
