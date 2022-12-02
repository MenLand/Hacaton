const { src, dest } = require('gulp');
const gulpIf = require('gulp-if');
const imagemin = require('gulp-imagemin');
const { isProd } = require('./isProd');
const { paths } = require('./paths');

exports.image = image = () =>
	src([`${paths.srcFolder}/images/**/**.{jpg,jpeg,png,svg}`])
		.pipe(
			gulpIf(
				isProd(),
				imagemin([
					imagemin.mozjpeg({
						quality: 80,
						progressive: true,
					}),
					imagemin.optipng({
						optimizationLevel: 2,
					}),
				])
			)
		)
		.pipe(dest(`${paths.buildFolder}/images`));
