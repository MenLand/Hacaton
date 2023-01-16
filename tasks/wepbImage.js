const { dest, src } = require('gulp');
const webp = require('gulp-webp');
const { paths } = require('./paths');
const size = require('gulp-size');
const gulpIf = require('gulp-if');
const { isProd } = require('./isProd');

exports.wepbImage = wepbImage = () =>
	src([`${paths.srcFolder}/images/**/**.{jpg,jpeg,png}`])
		.pipe(gulpIf(isProd(), size({ title: 'WEBP: Before compression' })))
		.pipe(webp({ quality: 90 }))
		.pipe(gulpIf(isProd(), size({ title: 'WEBP: After compression' })))
		.pipe(dest(`${paths.buildFolder}/images`));
