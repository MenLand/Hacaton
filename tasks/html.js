const browserSync = require('browser-sync');
const { src, dest } = require('gulp');
const fileInclude = require('gulp-file-include');
const htmlMin = require('gulp-htmlmin');
const gulpIf = require('gulp-if');
const size = require('gulp-size');
const gulpAvifWebp = require('gulp-avif-webp-html');
const { isProd } = require('./isProd');
const { paths } = require('./paths');

exports.htmlInclude = htmlInclude = () =>
	src([`${paths.srcFolder}/*.html`])
		.pipe(fileInclude())
		// .pipe(typograf({
		//   locale: ['ru', 'en-US']
		// }))
		// .pipe(gulpAvifWebp())
		.pipe(dest(paths.buildFolder))
		.pipe(gulpIf(isProd(), size({ title: 'HTML: Before compression' })))
		.pipe(gulpIf(isProd(), htmlMin({ collapseWhitespace: true })))
		.pipe(gulpIf(isProd(), dest(paths.buildFolder)))
		.pipe(gulpIf(isProd(), size({ title: 'HTML: After compression' })))
		.pipe(browserSync.stream());
