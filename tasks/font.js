const { src, dest } = require('gulp');
const gulpNewer = require('gulp-newer');
const gulpFonter = require('gulp-fonter');
const gulpTtf2Woff2 = require('gulp-ttf2woff2');

const { paths } = require('./paths');

exports.font = font = () =>
	src(`${paths.srcFolder}/fonts/*.ttf`)
		.pipe(dest(`${paths.buildFolder}/fonts`))
		.pipe(gulpNewer(`${paths.buildFolder}/fonts`))
		.pipe(
			gulpFonter({
				formats: ['woff'],
			})
		)
		.pipe(dest(`${paths.buildFolder}/fonts`))
		.pipe(src(`${paths.srcFolder}/fonts/*.ttf`))
		.pipe(gulpTtf2Woff2())
		.pipe(dest(`${paths.buildFolder}/fonts`));
