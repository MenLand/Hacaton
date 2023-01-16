const { src, dest } = require('gulp');
const gulpIf = require('gulp-if');
const imagemin = require('gulp-imagemin');
const { isProd } = require('./isProd');
const { paths } = require('./paths');
const size = require('gulp-size');
const imageminPngquant = require('imagemin-pngquant');

exports.image = image = () =>
	src([`${paths.srcFolder}/images/**/**.{jpg,jpeg,png,svg}`])
		.pipe(gulpIf(isProd(), size({ title: 'IMAGES: Before compression' })))
		.pipe(
			gulpIf(
				isProd(),
				imagemin([
					imagemin.mozjpeg({ quality: 80 }),
					imageminPngquant({ quality: [0.8, 0.9] }),
					imagemin.svgo(),
				])
			)
		)
		.pipe(gulpIf(isProd(), size({ title: 'IMAGES: After compression' })))
		.pipe(dest(`${paths.buildFolder}/images`));
