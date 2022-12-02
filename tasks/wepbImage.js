const { dest, src } = require('gulp');
const webp = require('gulp-webp');
const { paths } = require('./paths');

exports.wepbImage = wepbImage = () =>
	src([`${paths.srcFolder}/images/**/**.{jpg,jpeg,png}`])
		.pipe(webp())
		.pipe(dest(`${paths.buildFolder}/images`));
