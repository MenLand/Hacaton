const { dest, src } = require('gulp');
const avif = require('gulp-avif');
const { paths } = require('./paths');

exports.avifImage = avifImage = () =>
	src([`${paths.srcFolder}/images/**/**.{jpg,jpeg,png}`])
		.pipe(avif())
		.pipe(dest(`${paths.buildFolder}/images`));
